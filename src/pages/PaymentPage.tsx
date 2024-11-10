import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { usePaymentStore } from "../services/Payement";
import AddressSection from "../components/payment/addressSection";
import ShippingSection from "../components/payment/shippingSections";
import OrderSummary from "../components/payment/orderSummary";
import PaymentSection from "../components/payment/paymentSection";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../Layout/Navbar";

const PaymentPage = () => {
  const { basketItems } = usePaymentStore();
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [extra, setExtra] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [paymentMade, setPaymentMade] = useState(false);
  const { user } = useLoaderData() as LoaderData;

  const handleChangePanel =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handlePaymentMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
    if (e.target.value === "Adreste nakit ödeme") {
      setExtra(39);
    } else if (e.target.value === "Adreste kart ile ödeme") {
      setExtra(45);
    } else if (e.target.value === "Kredi Kartı") {
      setExtra(0);
    }
  };

  return (
    <>
      {!paymentMade ? (
        <Container>
          <Grid container spacing={3} mt={3}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                maxHeight: "670px",
                overflow: "hidden",
                marginRight: "1px solid black",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  width: 0,
                  background: "transparent",
                },
              }}
            >
              <AddressSection
                expanded={expanded}
                handleChangePanel={handleChangePanel}
                setSelectedAddress={setSelectedAddress}
              />
              <ShippingSection
                expanded={expanded}
                handleChangePanel={handleChangePanel}
                selectedAddress={selectedAddress}
              />
              <PaymentSection
                expanded={expanded}
                handleChangePanel={handleChangePanel}
                handlePaymentMethod={handlePaymentMethod}
                setPaymentMade={setPaymentMade}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <OrderSummary
                basketItems={basketItems}
                paymentMethod={paymentMethod}
                extra={extra}
              />
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {user && user.first_name ? (
              <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column',
                gap:1
              }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 60,
                    width: 60,
                    fontWeight: "bolder",
                    fontSize: 30,
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "50%",
                  }}
                >
                  ✓
                </Box>
                <Typography sx={{fontWeight:'bolder', color:'green'}} variant="subtitle1">
                  ÖDEME İŞLEMİ BAŞARILI
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Toplam Sipariş Tutarı:
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Sipariş özetiniz e-posta adresinize gönderildi.
                </Typography>
                <Typography>
                Şiparişlerinizi Hesabım sayfasından kontrol edebilirsiniz.
              </Typography>
                <Button  variant='contained' color='success' href={"/MyAccount?tab=olders"}> Hesabım </Button>
              </Box>
          ) : (
            <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection:'column',
              gap:1
            }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  width: 60,
                  fontWeight: "bolder",
                  fontSize: 30,
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "50%",
                }}
              >
                ✓
              </Box>
              <Typography sx={{fontWeight:'bolder', color:'green'}} variant="subtitle1">
                ÖDEME İŞLEMİ BAŞARILI
              </Typography>
              <Typography variant="subtitle1" sx={{}}>
                Toplam Sipariş Tutarı:
              </Typography>
              <Typography variant="subtitle1" sx={{}}>
                Sipariş özetiniz e-posta adresinize gönderildi.
              </Typography>
              <Button variant='contained' color='success' href={"/"}> Anasayfa </Button>{" "}
            </Box>
          )}
        </Container>
      )}
      </>
  );
};

export default PaymentPage;
