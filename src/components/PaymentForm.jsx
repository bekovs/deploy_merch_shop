import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useCart } from "../contexts/CartContextProvider";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

export default function Payment() {
  const { getCart, cart } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <Box sx={{minHeight: '70vh'}}>
      <Box
        sx={{
          margin: "10vw auto",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "45vw",
          height: "25vw",
          backgroundColor: "#2986cc",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "3vw",
            backgroundColor: "#252734",
            top: 0,
          }}
        ></div>
        <TextField
          sx={{
            backgroundColor: "#9fc5e8",
            width: "70%",
            margin: "0 auto",
            borderRadius: "8px",
          }}
          placeholder="card number"
        ></TextField>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            sx={{
              backgroundColor: "#9fc5e8",
              width: "40%",
              borderRadius: "8px",
            }}
            placeholder="cvv"
          ></TextField>
          <TextField
            sx={{
              backgroundColor: "#9fc5e8",
              width: "13.5%",
              marginLeft: "20px",
              borderRadius: "8px",
            }}
            placeholder="MM"
          ></TextField>
          <TextField
            sx={{
              backgroundColor: "#9fc5e8",
              width: "13.5%",

              borderRadius: "8px",
            }}
            placeholder="YY"
          ></TextField>
        </Box>
        <TextField
          sx={{
            backgroundColor: "#9fc5e8",
            width: "70%",
            margin: "0 auto",
            borderRadius: "8px",
          }}
          placeholder="card holder"
        ></TextField>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography
            sx={{ color: "white", marginLeft: "10px", fontSize: "3vmin" }}
          >
            Paying:${cart.totalPrice}
          </Typography>
          <Button sx={{ color: "white", fontSize: "2.5vmin" }}>Submit</Button>
        </Box>
      </Box>
    </Box>
  );
}
