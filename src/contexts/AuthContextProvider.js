import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://localhost:8000";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  const register = async (email, password) => {
    let data = {
      "email": email,
      "password": password,
      "admin": false,
    }

    try {
      const res = await axios.post(`${API}/register`, data, config);
      navigate("/login");
    } catch (error) {
      setError(`${error.response.data}`);
    }
  };

  const login = async (email, password) => {
    let data = {
      "email": email,
      "password": password,
    }

    try {
      let res = await axios.post(`${API}/login`, data, config);
      navigate("/");
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user)
    } catch (error) {
      setError(`${error.response.data}`);
    }
  };

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({});
  }

  function admin() {
    
  }

  return (
    <authContext.Provider
      value={{ register, login, logout, error, user, setUser: setUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
