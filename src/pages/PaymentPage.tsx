import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
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
              style={{
                marginRight: "1px solid black",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems={"center"}
              >
                <img width={200} src="/images/Logo/Logo1.png" alt="Logo" />
                <Box>
                  <strong>İsim Soyisim</strong> <br />
                  isimsoyisim@mail.com
                </Box>
              </Box>
              <Box mt={10}>
                <CustomAccordion id="section" sx={{ border: "none" }}>
                  <AccordionSummary
                    style={{
                      borderBottom: "1px solid rgb(228, 227, 232)",
                    }}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                   <span id="accordions">
                   <span className="circle"><strong></strong></span>
                    </span> <strong> Adres </strong>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle1">Teslimat Adresi</Typography>
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
                  <Typography>1,098 TL</Typography>
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
            </Grid>
          </Grid>
          <Button 
          variant='contained'
          style={{
            width:"150px",
            position:"fixed",
            bottom:0,
            left:0,
            right:0,
            margin:"0 auto",
            backgroundColor:"black"
          }}><Link style={{
            color:'white',
            textDecoration:'none'
          }} to={"/Home"}>Anasayfa</Link></Button>
        </Container>
      </Box>
    </>
  );
};

export default PaymentPage;
