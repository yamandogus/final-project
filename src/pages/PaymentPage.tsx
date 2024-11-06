import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import { usePaymentStore } from "../services/Payement";
import AddressSection from "../components/payment/addressSection";
import ShippingSection from "../components/payment/shippingSections";
import OrderSummary from "../components/payment/orderSummary";
import PaymentSection from "../components/payment/paymentSection";

const PaymentPage = () => {
  const { basketItems } = usePaymentStore();
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [extra, setExtra] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");

  
  const handleChangePanel = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
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
    <Box>
      <Container>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} md={6}
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
    </Box>
  );
};

export default PaymentPage;