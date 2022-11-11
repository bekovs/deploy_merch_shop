import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ width: "50vw", margin: "10vh auto" }}>
      <TextField
        id="standard-basic"
        label="Title"
        variant="standard"
        fullWidth
        name="title"
        onChange={handleInp}
        value={product.title || ""}
        focused
      />
      <TextField
        id="standard-basic"
        label="Description"
        variant="standard"
        fullWidth
        name="description"
        onChange={handleInp}
        value={product.description || ""}
        focused
      />
      <TextField
        id="standard-basic"
        label="Price"
        variant="standard"
        fullWidth
        name="price"
        onChange={handleInp}
        value={product.price || ""}
        focused
      />
      <TextField
        id="standard-basic"
        label="Image"
        variant="standard"
        fullWidth
        name="image"
        onChange={handleInp}
        value={product.image || ""}
        focused
      />
      <TextField
        id="standard-basic"
        label="Category"
        variant="standard"
        fullWidth
        name="category"
        onChange={handleInp}
        value={product.category || ""}
        focused
      />
      <Button
        variant="outlined"
        fullWidth
        onClick={() => {
          saveEditedProduct(product);
          navigate("/products");
        }}
      >
        SAVE PRODUCT
      </Button>
    </Box>
  );
};

export default EditProduct;
