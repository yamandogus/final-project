import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PaymentPage = () => {
  const { addresses } = useAddressesStore();
  const { basketItems } = usePaymentStore();
  const [open, setOpen] = useState(false);
  const total: number = Math.floor(
    basketItems.reduce((tot, item) => tot + item.price, 0)
  );
  const [selectedAddress, setSelectedAddress] = useState("");
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChangePanel =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
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
                  expanded={expanded === "panel1"}
                  onChange={handleChangePanel("panel1")}
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
                          top: "-1px",
                          borderRadius: "50%",
                          padding: "2px 6px",
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
                      <FormControl sx={{ width: "100%" }}>
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
                        onClick={() => setExpanded("panel2")}
                        style={{
                          marginLeft: 0,
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
                <CustomAccordion
                  expanded={expanded === "panel2"}
                  onChange={handleChangePanel("panel2")}
                  sx={{ border: "none" }}
                >
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
                          top: "-1px",
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
                    {selectedAddress ? (
                      <Box
                        sx={{
                          width: "100%",
                          padding: "10px 5px",
                          borderRadius: "2px",
                          margin: "10px 0 10px 18px",
                          border: "1px solid gray",
                        }}
                      >
                        {selectedAddress}
                      </Box>
                    ) : (
                      ""
                    )}
                    <Box px={2}>
                      <Button
                        onClick={() => setExpanded("panel3")}
                        style={{
                          marginLeft: 0,
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
                <CustomAccordion
                  expanded={expanded === "panel3"}
                  onChange={handleChangePanel("panel3")}
                  sx={{ border: "none" }}
                >
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
                          top: "-1px",
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
                    <Box>
                      <FormControl sx={{ width: "100%" }}>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="Kredi Kartı"
                          name="radio-buttons-group"
                        >
                          <Box
                            sx={{
                              py: 1.5,
                              px: 2,
                              borderRadius: 3,
                              border: "1px solid blue",
                              my: 2,
                              width: "100%",
                              backgroundColor: "rgb(247, 247, 249)",
                            }}
                          >
                            <FormControlLabel
                              value="Kredi Kartı"
                              control={<Radio />}
                              label="Kredi Kartı"
                            />
                            <Box>
                              <Stack gap={2}>
                                <TextField
                                  sx={{ backgroundColor: "white" }}
                                  fullWidth
                                  type="text"
                                  placeholder="Kart Numarası"
                                  inputProps={{
                                    inputMode: "numeric",
                                    maxLength: 19,
                                    pattern: "[0-9]*",
                                  }}
                                  onChange={(e) => {
                                    let value = e.target.value.replace(
                                      /\D/g,
                                      ""
                                    );
                                    if (value.length > 16)
                                      value = value.slice(0, 16);
                                    value =
                                      value.match(/.{1,4}/g)?.join(" ") || "";
                                    e.target.value = value;
                                  }}
                                />
                                <TextField
                                  sx={{ backgroundColor: "white" }}
                                  fullWidth
                                  placeholder="Kart üzerindeki isim"
                                  type="text"
                                />
                              </Stack>
                              <Stack direction={"row"} gap={3} mt={2}>
                                <TextField
                                  sx={{ backgroundColor: "white" }}
                                  fullWidth
                                  placeholder="Ay/Yıl"
                                  inputProps={{
                                    inputMode: "numeric",
                                    maxLength: 5,
                                    pattern: "[0-9/]*",
                                  }}
                                  onChange={(e) => {
                                    let value = e.target.value.replace(
                                      /\D/g,
                                      ""
                                    );
                                    if (value.length > 4)
                                      value = value.slice(0, 4);
                                    if (value.length > 2)
                                      value =
                                        value.slice(0, 2) +
                                        "/" +
                                        value.slice(2);
                                    e.target.value = value;
                                  }}
                                />
                                <TextField
                                  sx={{ backgroundColor: "white" }}
                                  fullWidth
                                  placeholder="CVC"
                                  inputProps={{
                                    inputMode: "numeric",
                                    maxLength: 3,
                                    pattern: "[0-9]*",
                                  }}
                                />
                              </Stack>
                            </Box>
                            <Stack
                              sx={{
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                                gap: 1,
                              }}
                              direction={"row"}
                            >
                              <Checkbox
                                {...label}
                                onClick={() => setOpen((newOpen) => !newOpen)}
                                size="small"
                              />
                              Kartımı{" "}
                              <img
                                width={70}
                                src="/images/master/master.png"
                                alt=""
                              />
                              altyapısında kullanmak <a href="">istiyorum</a>
                            </Stack>
                            {open ? (
                              <Stack gap={2}>
                                <TextField fullWidth placeholder="Kart ismi" />
                                <TextField
                                  fullWidth
                                  placeholder="+90 111 111 11 11"
                                />
                              </Stack>
                            ) : (
                              ""
                            )}
                          </Box>
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
                              control={<Radio />}
                              value="Adreste nakit ödeme"
                              label={
                                <Box
                                  display="flex"
                                  justifyContent="space-between"
                                  width="100%"
                                  gap={17}
                                >
                                  <Typography variant="subtitle1">
                                    Kapıda Ödeme (Nakit)
                                  </Typography>
                                  <Typography
                                    sx={{ fontWeight: "bolder" }}
                                    variant="subtitle1"
                                  >
                                    39 TL işlem bedeli
                                  </Typography>
                                </Box>
                              }
                              sx={{ width: "100%" }}
                            />
                          </Box>
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
                              control={<Radio />}
                              value="Adreste kart ile ödeme"
                              label={
                                <Box
                                  display="flex"
                                  justifyContent="space-between"
                                  width="100%"
                                  gap={12}
                                >
                                  <Typography variant="subtitle1">
                                    Kapıda Ödeme (Kredi Kartı)
                                  </Typography>
                                  <Typography
                                    sx={{ fontWeight: "bolder" }}
                                    variant="subtitle1"
                                  >
                                    39 TL işlem bedeli
                                  </Typography>
                                </Box>
                              }
                              sx={{ width: "100%" }}
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
                        Ödeme Yap
                      </Button>
                    </Box>
                  </AccordionDetails>
                </CustomAccordion>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ position: "relative", height: "clac(100vh-100px)" }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  overflowY: "scroll",
                  maxHeight: "calc(100vh - 150px)",
                  "&::-webkit-scrollbar": {
                    width: 0,
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
                        {basket.price} TL
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ position: "relative", bottom: 0, width: "100%" }}>
                <Grid
                  mt={3}
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    pt: 2,
                    borderTop: "1px solid gray",
                    gap: 2,
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PaymentPage;
