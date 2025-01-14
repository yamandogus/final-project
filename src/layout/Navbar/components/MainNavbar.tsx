import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  Typography,
  Toolbar,
  Stack,
  Modal,
} from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { LinksProps } from "../../../services/Type";
import SecondNavbar from "../../MobilNavbar/mobilNavbar";
import { LoaderData } from "../navbar";
import UserSection from "./UserSection";
import CartSection from "./CartSection";
import SearchSection from "./SearchSection";
import NavbarModal from "./NavbarPopover";

function MainNavbar() {
  const { allProduct = [], user } = useLoaderData() as LoaderData;
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const handleOpenModal =
    (index: number) => () => {
      setOpenModalIndex(index);
    };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };


  useEffect(()=>{
    const scrollY = window.scrollY;
    const windowHeigth = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if(scrollY + windowHeigth >= documentHeight - 100){
      handleCloseModal()
    }
    window.addEventListener("scroll", handleCloseModal);

    return () =>{
      window.removeEventListener("scroll", handleCloseModal)
    }
  },[])

  return (
    <>
      <Box
        sx={{ position: "relative", zIndex: 1420 }}
        component="div"
        className="firstNavbar"
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Toolbar>
                <Typography variant="h6" component="div">
                  <Link to="/Home">
                    <img
                      className="navImg"
                      width={160}
                      src="/images/Logo/Logo1.png"
                      alt=""
                    />
                  </Link>
                </Typography>
              </Toolbar>
              <Stack direction="row" spacing={2}>
                <SearchSection />
                <UserSection user={user} />
                <CartSection />
              </Stack>
            </Stack>
          </Container>
          <Box sx={{ backgroundColor: "black", color: "white" }}>
            <Container>
              <List
                onMouseLeave={handleCloseModal}
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2.3,
                }}
              >
                {allProduct.map((list: LinksProps, index: number) => (
                  <React.Fragment key={index}>
                    <ListItem
                      onMouseEnter={handleOpenModal(index)}
                      className="navbar-list-item"
                      sx={{
                        flex: 1,
                        justifyContent: "center",
                        fontSize: 13,
                        py: 2,
                        cursor: "pointer",
                      }}
                      color="inherit"
                    >
                      {list.name}
                    </ListItem>
                    <Modal
                      open={openModalIndex === index}
                      onClose={handleCloseModal}
                      disableEnforceFocus={true}
                      disableScrollLock={true}
                      disableAutoFocus={true}
                      sx={{
                        zIndex: 1400,
                      }}
                    >
                      <Box
                        onMouseLeave={handleCloseModal}
                        className="modal-box"
                      >
                        <NavbarModal
                          links={allProduct[index]}
                          onClose={handleCloseModal}
                        />
                      </Box>
                    </Modal>
                  </React.Fragment>
                ))}
                <ListItem
                  component={Link}
                  to={"/AllProducts"}
                  onMouseEnter={handleCloseModal}
                  sx={{
                    color: "white",
                    flex: 1,
                    justifyContent: "center",
                    fontSize: 13,
                    "&::after": {
                      display: "none",
                    },
                  }}
                  className="navbar-list-item"
                >
                  TÜM ÜRÜNLER
                </ListItem>
              </List>
            </Container>
          </Box>
        </AppBar>
      </Box>
      <SecondNavbar />
    </>
  );
}

export default MainNavbar;