import { Box } from "@mui/system";
import NavBar from "./components/NavBar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";

import Footer from "./components/Footer";



function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>

            <Box sx={{minHeight: '100vh', position: 'relative'}}>
              <NavBar />
              <MainRoutes />
              <Footer />
            </Box>

          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
