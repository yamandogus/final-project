import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Menu, MenuItem, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black", flexGrow: 1 }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Toolbar>
              <Typography variant="h6" component="div">
                <Link to={'/page1'} style={{textDecoration:'none', fontWeight:'bolder', color:'black'}}>
                OJS <br /> NUTRITION
                </Link>
              </Typography>
            </Toolbar>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Aradığınız ürünü yazın…"
                inputProps={{ "aria-label": "search" }}

              />
            </Search>

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<PersonIcon />}
                endIcon={<ArrowDropDownIcon/>}
                onClick={handleClick}
              >
                Hesap
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link className="accountLink" to={'MyAccount'}>Hesabım</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className="accountLink"  to={'SingUp'}>
                Kayıt Ol
                </Link></MenuItem>
              </Menu>
              <Button
                className="buttonBef"
                variant="outlined"
                color="inherit"
                startIcon={<ShoppingCartIcon sx={{fontSize:30, mx:1}} />}
              >
                Sepet
              </Button>
            </Stack>
          </Stack>
        </Container>
        <Box>
          <Stack
            display={'flex'}
            direction="row"
            spacing={10}
            sx={{
              backgroundColor: "black",
              color: "white",
              py: 1,
              px: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button color="inherit">Protein</Button>
            <Button color="inherit">Spor Gıdaları</Button>
            <Button color="inherit">Sağlık</Button>
            <Button color="inherit">Gıda</Button>
            <Button color="inherit">Vitamin</Button>
            <Button color="inherit">Tüm Ürünler</Button>
          </Stack>
          <Stack
            direction="row"
            sx={{
              backgroundColor: "white",
              color: "black",
              py: 1,
              px: 6,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: 12, display: "flex", alignItems: "center" }}
            >
              <Box component="span" sx={{ marginRight: 1 }}>
                <LocalShippingIcon />
              </Box>
              <strong>AYNI GÜN KARGO</strong> -16.00'DAN SONRA ÖNCEKİ SİPARİŞLERDE
            </Typography>
            <Typography
              sx={{ fontSize: 12, display: "flex", alignItems: "center" }}
            >
              <Box component="span" sx={{ marginRight: 1 }}>
                <InsertEmoticonIcon />
              </Box>
              <strong>ÜCRETSİZ KARGO</strong> - 100 TL ÜZERİ SİPARİŞLERDE
            </Typography>
            <Typography
              sx={{ fontSize: 12, display: "flex", alignItems: "center" }}
            >
              <Box component="span" sx={{ marginRight: 1 }}>
                <GppGoodIcon />
              </Box>
              <strong>GÜVENLİ ALIŞVERİŞ</strong> - 1.000.000 + MUTLU ALIŞVERİŞ
            </Typography>
          </Stack>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
