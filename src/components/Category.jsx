import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { createTheme } from "@mui/material/styles";

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  "& label.Mui-focused": {
    color: p.focusColor
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor
    }
  }
}));

const Category = () => {
  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#252734',
      },
      secondary: {
        main: '#3C3F52',
      }
    }
  })

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const settings = ["All", "Clothes", "Sport", "Office"];

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div>
      <Box
        sx={{ flexGrow: 0, p: 3, display: "flex", justifyContent: "flex-start", position: 'relative' }}
      >
        <Tooltip title="Open settings">
          <Button
            theme={theme}
            variant="contained"
            onClick={handleOpenUserMenu}
            sx={{ mr: 3, width: '15vmin', fontSize: '0.7rem' }}
          >
            Catalog
          </Button>
        </Tooltip>

        <CssTextField
          focusColor="#252734"
          label="Search..."
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Menu
          sx={{mt: '3.7em'}}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <Box
              key={setting}
              onClick={handleCloseUserMenu}
            >
              <Button
                theme={theme}
                value={setting.toLowerCase()}
                onClick={(e) => fetchByParams("category", e.target.value)}
                sx={{textAlign:'center'}}
              >
                {setting}
              </Button>
            </Box>
          ))}
        </Menu>
      </Box>
    </div>
  );
};

export default Category;
