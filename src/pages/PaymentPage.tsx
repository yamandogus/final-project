import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useAddressesStore } from "../components/Account/Addresses/Address";
import { usePaymentStore } from "./Payement";
import { photo_url } from "../components/Bestseller/CokSatanlar";
import { useState } from "react";

const CustomAccordion = styled(Accordion)({
  border: "none",
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
});

const PaymentPage = () => {
  const { addresses } = useAddressesStore();
  const { basketItems } = usePaymentStore();
  const total: number = Math.ceil(
    basketItems.reduce((tot, item) => tot + item.price, 0)
  );
  const [selectedAddress, setSelectedAddress] = useState("");
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={6} mt={3}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                height: "670px",
                overflow: "hidden",
                marginRight: "1px solid black",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  width: 0,
                  background: "transparent",
                },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Link to={"/Home"}>
                  <img width={200} src="/images/Logo/Logo1.png" alt="Logo" />
                </Link>
                <Box>
                  <strong>İsim Soyisim</strong> <br />
                  isimsoyisim@mail.com
                </Box>
              </Box>
              <Box mt={5}>
                <CustomAccordion
                  id="section"
                  sx={{ border: "none" }}
                  defaultExpanded
                >
                  <AccordionSummary
                    style={{
                      borderBottom: "1px solid rgb(200, 192, 233)",
                    }}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                 <strong style={{ position: "relative" }}>
                      Adres
                      <strong
                        style={{
                          position: "absolute", 
                          backgroundColor: "black",
                          color: "white",
                          lineHeight: "20px",
                          height: "20px",
                          fontSize: 12,
                          left: "-30px",
                          top:"-1px", 
                          borderRadius: "50%",
                          padding: "2px px",
                          display: "flex", 
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        1
                      </strong>
                    </strong>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 2 }}>
                    <Typography variant="subtitle1">Teslimat Adresi</Typography>
                    <Box px={2}>
                      <FormControl sx={{ width: "90%" }}>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="Ev"
                          name="radio-buttons-group"
                        >
                          {addresses.map((address) => (
                            <Box
                              sx={{
                                px: 2,
                                borderRadius: 3,
                                border: "1px solid black",
                                my: 2,
                              }}
                            >
                              <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                              >
                                {" "}
                                <FormControlLabel
                                  control={
                                    <Radio
                                      value={`${address.address} , ${address.district} / ${address.city}`}
                                      onChange={(e) =>
                                        setSelectedAddress(e.target.value)
                                      }
                                    />
                                  }
                                  label={address.title}
                                />{" "}
                                <Button>Düzenle</Button>
                              </Box>
                              <Box>
                                <Typography>
                                  {address.address}, {address.district},{" "}
                                  {address.city}
                                </Typography>
                              </Box>
                            </Box>
                          ))}
                          <Box
                            sx={{
                              px: 2,
                              borderRadius: 3,
                              border: "1px solid black",
                              my: 2,
                              width: "100%",
                            }}
                          >
                            <FormControlLabel
                              value="Yeni Adres"
                              control={<Radio />}
                              label="Yeni Adres"
                            />
                          </Box>
                        </RadioGroup>
                      </FormControl>
                      <Button
                        style={{
                          display: "block",
                          padding: "10px 0",
                          width: "100%",
                          margin: "0 auto",
                          color: "white",
                          backgroundColor: "black",
                        }}
                      >
                        Kargo ile Devam Et
                      </Button>
                    </Box>
                  </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion sx={{ border: "none" }}>
                  <AccordionSummary
                    style={{
                      borderBottom: "1px solid rgb(228, 227, 232)",
                    }}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                   <strong style={{ position: "relative" }}>
                      Kargo
                      <strong
                        style={{
                          position: "absolute", 
                          backgroundColor: "black",
                          color: "white",
                          lineHeight: "20px",
                          height: "20px",
                          fontSize: 12,
                          left: "-30px",
                          top:"-1px", 
                          borderRadius: "50%",
                          padding: "2px 6px",
                          display: "flex", 
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        2
                      </strong>
                    </strong>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle1">Teslimat Adresi</Typography>
                    <Box
                      sx={{
                        mx: 2,
                        width: "85%",
                        p: 2,
                        borderRadius: 3,
                        border: "1px solid blue",
                        my: 2,
                      }}
                    >
                      {selectedAddress}
                    </Box>
                    <Box px={2}>
                      <Button
                        style={{
                          display: "block",
                          padding: "10px 0",
                          width: "100%",
                          margin: "0 auto",
                          color: "white",
                          backgroundColor: "black",
                        }}
                      >
                        Ödeme ile Devam Et
                      </Button>
                    </Box>
                  </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion sx={{ border: "none" }}>
                  <AccordionSummary
                    style={{
                      borderBottom: "1px solid rgb(228, 227, 232)",
                    }}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <strong style={{ position: "relative" }}>
                      Ödeme
                      <strong
                        style={{
                          position: "absolute", 
                          backgroundColor: "black",
                          color: "white",
                          lineHeight: "20px",
                          height: "20px",
                          fontSize: 12,
                          left: "-30px",
                          top:"-1px", 
                          borderRadius: "50%",
                          padding: "2px 6px",
                          display: "flex", 
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        3
                      </strong>
                    </strong>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle1">Teslimat Adresi</Typography>
                    <Box px={2}>
                      <Button
                        style={{
                          display: "block",
                          padding: "10px 0",
                          width: "100%",
                          margin: "0 auto",
                          color: "white",
                          backgroundColor: "black",
                        }}
                      >
                        Ödeme Yap
                      </Button>
                    </Box>
                  </AccordionDetails>
                </CustomAccordion>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                container
                spacing={2}
                sx={{
                  height: "500px",
                  overflow: "hidden",
                  overflowY: "scroll",
                  "&::-ewbkit-scrollbar": {
                    width: 0,
                    background: "transparent",
                  },
                }}
              >
                {basketItems.map((basket, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <img
                          style={{
                            borderRadius: 2,
                          }}
                          width={90}
                          src={photo_url + basket.img}
                          alt={basket.name}
                        />
                        <Stack ml={2}>
                          <strong>{basket.name}</strong>
                          <Typography
                            variant="subtitle1"
                            color="rgb(139, 138, 146)"
                          >
                            {basket.aroma} <br /> {basket.gram}gr
                          </Typography>
                        </Stack>
                      </Box>
                      <Typography sx={{ fontWeight: "bolder" }}>
                        {Math.ceil(basket.price)} TL
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Grid
                mt={3}
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  pt: 2,
                  borderTop: "1px solid gray",
                }}
              >
                <Stack
                  width={"100%"}
                  direction={"row"}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>Ara Toplam ?</Typography>
                  <Typography>{total}TL</Typography>
                </Stack>
              </Grid>
              <Grid
                mt={3}
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  pt: 2,
                  borderTop: "1px solid gray",
                }}
              >
                <Stack
                  width={"100%"}
                  direction={"row"}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography fontWeight={"bolder"}>Toplam</Typography>
                  <Typography fontWeight={"bolder"}>{total} TL</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PaymentPage;
