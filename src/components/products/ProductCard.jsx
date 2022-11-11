import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addProductToCart } = useCart();
  const { user } = useAuth();

  const navigate = useNavigate();


  return (
    <Card sx={{ width: 300, m: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt="Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          $ {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {
          user.admin ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              DELETE
            </Button>
            <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              EDIT
            </Button>
          </>
          ):
          (<></>)
        }

        <Button size="small" onClick={() => addProductToCart(item)}>
          Cart
        </Button>

        <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
          MORE
        </Button>
      </CardActions>
    </Card>
  );
}
