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

const CustomAccordion = styled(Accordion)({
  border: "none",
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
});

const PaymentPage = () => {
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={6} mt={3}>
            <Grid
              item
              xs={6}
              sx={{
                height:"670px",
                overflow:"hidden",
                marginRight: "1px solid black",
                overflowY:'scroll',
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
                <Link to={"/Home"}><img width={200} src="/images/Logo/Logo1.png" alt="Logo" /></Link>
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
                    <strong>Adres </strong>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 2 }}>
                    <Typography variant="subtitle1">Teslimat Adresi</Typography>
                    <Box px={2}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="Ev"
                          name="radio-buttons-group"
                        >
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
                                value="Ev"
                                control={<Radio />}
                                label="Ev"
                              />{" "}
                              <Button>Düzenle</Button>
                            </Box>
                            <Box>
                              <Typography>
                                Ahmet Mah. Mehmetoğlu Sk., No: 1 Daire: 2,
                                Ataşehir, İstanbul, Türkiye
                              </Typography>
                            </Box>
                          </Box>
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
                                value="Ofis"
                                control={<Radio />}
                                label="Ofis"
                              />{" "}
                              <Button>Düzenle</Button>
                            </Box>

                            <Box>
                              <Typography>
                                Ahmet Mah. Mehmetoğlu Sk., No: 1 Daire: 2,
                                Ataşehir, İstanbul, Türkiye
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              px: 2,
                              borderRadius: 3,
                              border: "1px solid black",
                              my: 2,
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
                    <strong>Kargo</strong>
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
                    <strong>Ödeme</strong>
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
            <Grid item xs={6}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img width={90} src="/images/page3/page12.png" alt="" />
                    <Stack ml={2}>
                      <strong>WHEY PROTEIN</strong>
                      <span color="rgb(139, 138, 146)">Çilek/ 400g</span>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography>458 TL</Typography>
                </Grid>
              </Grid>
              <Grid
                mt={3}
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img width={90} src="/images/page3/page12.png" alt="" />
                    <Stack ml={2}>
                      <strong>WHEY PROTEIN</strong>
                      <span color="rgb(139, 138, 146)">Çilek/ 400g</span>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography>1,098 TL</Typography>
                </Grid>
              </Grid>
              <Grid
                mt={3}
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  pt:2,
                  borderTop:"1px solid gray"
                }}
              >
                <Grid item>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    Ara Toplam ?
                  </Box>
                </Grid>
                <Grid item>
                  <Typography>1,675 TL</Typography>
                </Grid>
              </Grid>
              <Grid
                mt={3}
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  pt:2,
                  borderTop:"1px solid gray"
                }}
              >
                <Grid item>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                   <Typography fontWeight={'bolder'}>Toplam</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography fontWeight={'bolder'}>1,098 TL</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PaymentPage;
