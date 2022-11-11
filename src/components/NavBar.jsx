import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useAuth } from "../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import { createTheme, IconButton, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import logo from "../assets/icons/logo_fafafa.svg";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NavBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2877ee",
      },
      secondary: {
        main: "#fafafa",
      },
    },
  });

  const navigate = useNavigate();

  const linkStyle = {
    textDecoration: "none",
    fontSize: '1.8vmin',
    color: "inherit",
    cursor: "pointer",
    padding: "1.5em",
    transition: "100ms",
  };

  const { logout, user, setUser } = useAuth();

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem('user'))) {
      setUser(JSON.parse(localStorage.user));
    }
  },[])

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate('/products')}>
            <ListItemIcon>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate('/about')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate('/cart')}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </ListItem>
        {
          user.admin ? (    
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/admin')}>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </ListItem>
          ) : null
        }
      </List>
      <Divider />
      <List>
        {
          user.email ? (
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
              logout()
              navigate('/')
              }}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('/login')}>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('/register')}>
                  <ListItemIcon>
                    <HowToRegIcon />
                  </ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </>
          )
        }
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#252734 " }}
        elevation={2}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="navbar"
        >
          <Box
            className="navlinks"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="logo" width="30em" />
              </IconButton>
            </Link>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/products" style={linkStyle}>
              Products
            </Link>
            <Link to="/about" style={linkStyle}>
              About us
            </Link>
            <Link to="/cart" style={linkStyle}>
              Cart
            </Link>
            {
              user.admin ? (
              <>
                <Link to="/admin" style={linkStyle}>
                  Admin
                </Link>
              </>
              ):
              (<></>)
            }
          </Box>
          <Box className="navlinks">
            {localStorage.getItem("user") ? (
              <>
                <Link to="/" style={linkStyle}>
                  {JSON.parse(localStorage.getItem("user")).email.split('@')[0]}
                </Link>
                <Link to="/" style={linkStyle} onClick={logout}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" style={linkStyle}>
                  Login
                </Link>
                <Link to="/register" style={linkStyle}>
                  Register
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="navbar-burger"
        >
          <Box
            className="navlinks"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer('left', true)}
            >
              <img src={logo} alt="logo" width="30em" />
            </IconButton>
            <Box className="burger">
                  
              <React.Fragment key="left">
                <SwipeableDrawer
                  anchor='left'
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                  onOpen={toggleDrawer('left', true)}
                >
                  {list('left')}
                </SwipeableDrawer>
              </React.Fragment>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
