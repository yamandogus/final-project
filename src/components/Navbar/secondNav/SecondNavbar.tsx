import {

  AppBar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchIcon from "@mui/icons-material/Search";
const SecondNavbar = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1 }} component={"div"} className="secondNavbar">
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "white", color: "black" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon/>
            </IconButton>
            <Typography
              textAlign={"center"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img width={130} src="/images/Logo/Logo1.png" alt="" />
            </Typography>
            <Button className="shoppingCart">
            <LocalGroceryStoreOutlinedIcon sx={{ fontSize: 30, mx: 1 }} />
            </Button>
          </Toolbar>
        </AppBar>
        <Box>
          <TextField
            size="small"
            placeholder="Aradığınız Ürünü Yazınız"
            sx={{
              my: 1,

              width: "100%",
            }}
            InputProps={{
              sx: {
                borderRadius: 35,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default SecondNavbar;
