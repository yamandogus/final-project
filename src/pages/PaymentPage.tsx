import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { usePaymentStore } from "../services/Payement";
import AddressSection from "../components/payment/addressSection";
import ShippingSection from "../components/payment/shippingSections";
import OrderSummary from "../components/payment/orderSummary";
import PaymentSection from "../components/payment/paymentSection";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../layout/Navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { photo_url } from "../components/Bestseller/Bestseller";

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
              <Box>
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
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        position={"relative"}
                      >
                        <img
                          style={{
                            position: "relative",
                            width: "20%",
                            objectFit: "cover",
                            borderRadius: 2,
                            aspectRatio: 1 / 1,
                          }}
                          width={100}
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
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          mr: 2,
                          minWidth: "100px",
                          textAlign: "right",
                        }}
                      >
                        {(basket.price * basket.count).toFixed(2)} TL
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Box>
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
