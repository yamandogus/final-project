import { Box, Button, Container, Grid,Typography } from "@mui/material";
import { useState } from "react";
import { usePaymentStore } from "../services/Payement";
import OrderSummary from "../components/Payment/OrderSummary";
import PaymentSection from "../components/Payment/PaymentSection";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../layout/navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AddressSection from "../components/Payment/AddressSection";
import ShippingSection from "../components/Payment/ShippingSections";

const PaymentPage = () => {
  const { basketItems } = usePaymentStore();
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [extra, setExtra] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [paymentMade, setPaymentMade] = useState(false);
  const { user, userCart} = useLoaderData() as LoaderData;
  const handleChangePanel =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const total: number = basketItems.reduce(
    (tot, item) => tot + item.price * item.count,
    0
  );

  const handlePaymentMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
    if (e.target.value === "Adreste nakit ödeme") {
      setExtra(39);
    } else if (e.target.value === "Adreste kart ile ödeme") {
      setExtra(45);
    } else if (e.target.value === "credit_cart") {
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
                setSelectedAddressId={setSelectedAddressId}
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
                selectedAddressId={selectedAddressId}
                selectedAddress={selectedAddress}
                user={user}
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

            //USER
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
             <DotLottieReact
                  src="https://lottie.host/6b0b00db-8ae6-45e3-993a-52aad9f1d68e/5M1MexEXOy.lottie"
                  loop
                  autoplay
                />
              <Typography
                sx={{ fontWeight: "bolder", color: "green" }}
                variant="subtitle1"
              >
                ÖDEME İŞLEMİ BAŞARILI
              </Typography>
              <Typography variant="subtitle1" sx={{}}>
                Toplam Sipariş Tutarı: <b>{userCart.total_price} TL</b>
              </Typography>
              <Typography variant="subtitle1" sx={{}}>
                Sipariş özetiniz e-posta adresinize gönderildi.
              </Typography>
              <Typography>
                Şiparişlerinizi Hesabım sayfasından kontrol edebilirsiniz.
              </Typography>
              <Box >
              <Button
                variant="contained"
                color="success"
                href={"/MyAccount?tab=olders"}
                sx={{mr:2}}
              >
                {" "}
                Hesabım{" "}
              </Button>
              <Button
                variant="contained"
                color="success"
                href={"/"}
              >
                {" "}
                Anasayfa{" "}
              </Button>
              </Box>
            </Box>
          ) : (
            //GUEST
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <DotLottieReact
                  src="https://lottie.host/6b0b00db-8ae6-45e3-993a-52aad9f1d68e/5M1MexEXOy.lottie"
                  loop
                  autoplay
                />
                <Typography
                  sx={{ fontWeight: "bolder", color: "green" }}
                  variant="subtitle1"
                >
                  ÖDEME İŞLEMİ BAŞARILI
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Toplam Sipariş Tutarı: {total} TL
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Sipariş özetiniz e-posta adresinize gönderildi.
                </Typography>
                <Button variant="contained" color="success" href={"/"}>
                  {" "}
                  Anasayfa{" "}
                </Button>{" "}
              </Box>
            </Box>
          )}
        </Container>
      )}
    </>
  );
};

export default PaymentPage;
