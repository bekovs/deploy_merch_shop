import { CardMedia, Grid, Paper, Typography } from "@mui/material"; 
import React, { useEffect } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import { useProducts } from "../../contexts/ProductContextProvider"; 
import BottomNavigation from "@mui/material/BottomNavigation"; 
import BottomNavigationAction from "@mui/material/BottomNavigationAction"; 
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; 
 
const ProductDetails = () => { 
  const { id } = useParams(); 
 
  const { getProductDetails, productDetails } = useProducts(); 
  const [value, setValue] = React.useState(0); 
  const navigate = useNavigate(); 
  console.log(productDetails); 
  useEffect(() => { 
    getProductDetails(id); 
  }, []); 
 
  return ( 
    <Paper sx={{ m: 5 }} elevation={6}> 
      <Grid container spacing={2}> 
        <Grid className="productDetails_img" item xs={6}> 
          <img 
            src={productDetails.image} 
            alt="" 
            style={{ maxWidth: "100%", maxHeight: "70vh" }} 
          /> 
        </Grid> 
        <Grid sx={{ marginTop: 3 }} className="productDetails_info" item xs={6}> 
          <Typography className="productDetails_name" variant="h4"> 
            {productDetails.title} 
          </Typography> 
          <Typography className="productDetails_type" variant="subtitle1"> 
            {productDetails.type} 
          </Typography> 
          <Typography className="productDetails_price" variant="caption"> 
            ${productDetails.price} 
          </Typography> 
          <Typography 
            sx={{ paddingRight: "20px" }} 
            className="productDetails_descr" 
          > 
            {productDetails.description} 
          </Typography> 
        </Grid> 
      </Grid> 
      {/* ----------- */} 
      <BottomNavigation 
        className="bottom_nav" 
        showLabels 
        value={value} 
        onChange={(event, newValue) => { 
          setValue(newValue); 
        }} 
      > 
        <BottomNavigationAction 
          onClick={() => navigate(`/products/`)} 
          icon={<ArrowBackIcon />} 
        /> 
      </BottomNavigation> 
    </Paper> 
  ); 
}; 
 
export default ProductDetails;