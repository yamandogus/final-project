import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  FormGroup,
  InputAdornment,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
  Stack,
  TextField,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import DrawerList from '../components/MyCart/DrawerList';
import SecondNavbar from './SecondNavbar';
import NavbarPopover from '../components/Navbar/NavbarPopover';

interface ListItemProps {
  listitem: string;
  title: string;
  tooltipContent: React.ReactNode;
}

const listItemsData: ListItemProps[] = [
  {
    listitem: 'PROTEİN',
    title: 'Protein',
    tooltipContent: <NavbarPopover />,
  },
  {
    listitem: 'SPOR GIDALARI',
    title: 'Spor Gıdaları',
    tooltipContent: <Typography>Spor Gıdaları</Typography>,
  },
  {
    listitem: 'SAĞLIK',
    title: 'Sağlık',
    tooltipContent: <Typography>Sağlık</Typography>,
  },
  {
    listitem: 'GIDA',
    title: 'Gıda',
    tooltipContent: <Typography>Gıda</Typography>,
  },
  {
    listitem: 'VİTAMİN',
    title: 'Vitamin',
    tooltipContent: <Typography>Vitamin</Typography>,
  },
  {
    listitem: 'TÜM ÜRÜNLER',
    title: 'Tüm Ürünler',
    tooltipContent: <Typography>Tüm Ürünler</Typography>,
  },
];

// const tooltipStyle = {
//   position: 'fixed',
//   bottom: '20px',
//   top: '18%', 
//   left: '50%', 
//   height: 'auto', 
//   transform: 'translateX(-50%)', 
//   width: '60%',
//   bgcolor: 'background.paper',
//   border: '1px solid #000',
//   p: 2,
//   zIndex: 1300, 
// };

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  // const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  // const [selectedItem, setSelectedItem] = useState<number | null>(null);
  // const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  // const tooltipRef = useRef<HTMLDivElement | null>(null);

  // const handleOpenTooltip = (index: number) => {
  //   setSelectedItem(index);
  //   setTooltipOpen(true);
  // };

  // const handleCloseTooltip = () => {
  //   setTooltipOpen(false);
  //   setSelectedItem(null);
  // };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleContinue = () => {
    setOpen(false);
    navigate('/PaymentPage');
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box component="div" className="firstNavbar">
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', flexGrow: 1 }}>
          <Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Toolbar>
                <Typography variant="h6" component="div">
                  <Link to="/Home">
                    <img
                      className="navimg"
                      width={160}
                      src="/images/Logo/Logo1.png"
                      alt=""
                    />
                  </Link>
                </Typography>
              </Toolbar>
              <Stack className="navAs" direction="row" spacing={2}>
                <FormGroup>
                  <TextField
                    className="searchInput"
                    size="small"
                    placeholder="Lütfen bir ürün arayınız"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box
                            component="button"
                            sx={{
                              height: 39,
                              px: 3,
                              backgroundColor: 'rgba(145, 145, 145, 1)',
                              border: 'none',
                              borderRadius: '0 4px 4px 0',
                              cursor: 'pointer',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            Ara
                          </Box>
                        </InputAdornment>
                      ),
                      className: 'inputw',
                      sx: {
                        width: 350,
                        paddingRight: 0,
                      },
                    }}
                  />
                </FormGroup>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<PersonIcon />}
                  endIcon={<ArrowDropDownIcon />}
                  onClick={handleClick}
                >
                  Hesap
                </Button>
                <Menu
                  disableScrollLock
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link className="accountLinkNav" to="MyAccount">
                      Hesabım
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="accountLinkNav" to="Login">
                      Üye Girişi
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="accountLinkNav" to="SingUp">
                      Üye Ol
                    </Link>
                  </MenuItem>
                </Menu>
                <Button
                  className="buttonBef"
                  variant="contained"
                  sx={{
                    backgroundColor: 'gray',
                    px: 4,
                    '&:hover': { backgroundColor: 'gray' },
                  }}
                  startIcon={<ShoppingCartIcon sx={{ fontSize: 30, mx: 1 }} />}
                  onClick={toggleDrawer(true)}
                >
                  Sepet
                </Button>
                <Drawer
                  disableScrollLock
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <DrawerList onCountine={handleContinue} />
                </Drawer>
              </Stack>
            </Stack>
          </Container>
          <Box sx={{ backgroundColor: 'black', color: 'white' }}>
            <Container>
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                {listItemsData.map((list, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      // ref={(el) => (listItemRefs.current[index] = el)}
                      // onMouseEnter={() => handleOpenTooltip(index)}
                      // onMouseLeave={handleCloseTooltip}
                      className="headLink textDec"
                      sx={{ flex: 1, justifyContent: 'center', fontSize: 13 }}
                      color="inherit"
                    >
                      {list.listitem.toUpperCase()}
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Container>
          </Box>
        </AppBar>
      </Box>
      <SecondNavbar />
      {/* {tooltipOpen && (
        <Box
          ref={tooltipRef}
          sx={tooltipStyle}
          onMouseLeave={handleCloseTooltip}
        >
          <Box sx={{ mt: 2 }}>
            {selectedItem !== null && listItemsData[selectedItem].tooltipContent}
          </Box>
        </Box>
      )} */}
    </>
  );
}

export default Navbar;
