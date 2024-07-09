import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import GppGoodIcon from '@mui/icons-material/GppGood';

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
                OJS <br /> NUTRITION
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
              >
                Hesap
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<ShoppingCartIcon />}
              >
                Sepet
              </Button>
            </Stack>
          </Stack>
        </Container>
        <Box>
          <Stack
            direction="row"
            spacing={2}
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
