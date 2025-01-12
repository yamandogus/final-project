import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import HttpsIcon from "@mui/icons-material/Https";
import { usePaymentStore } from "../../services/Payement";
import { base_url } from "../Bestseller/BestsellerPage";
import { useStore } from "../../services/Count";
import { AccountProps } from "../Account/Informations/MyAccount";
import CustomAccordion from "./CustomAccordion";
import CreditCart from "./CreditCart";
import PaymentExtra from "./PaymentExtra";
import PaymentSecurity from "./PaymentSecurity";
import PaymentControl from "./PaymentControl";


interface PaymentSectionProps {
  expanded: string | false;
  handleChangePanel: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  handlePaymentMethod: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPaymentMade: (e: boolean) => void;
  selectedAddress: string;
  selectedAddressId: string;
  user: AccountProps | null;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  expanded,
  handleChangePanel,
  handlePaymentMethod,
  setPaymentMade,
  selectedAddressId,
  user,
}) => {
  const [selectedPayment, setSelectedPayment] = useState("credit_cart");
  const { basketItems, clearBasket} = usePaymentStore();
  const { resetCount } = useStore();
  const [paymentControl, setPaymentControl] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.value);
    handlePaymentMethod(e);
  };

  const handlePayment = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const responsePayment = await fetch(
        base_url + "/orders/complete-shopping",
        {
          method: "POST",
          body: JSON.stringify({
            address_id: selectedAddressId,
            payment_type: "credit_cart",
            card_digits: "1234567891234567",
            card_expiration_date: "06-25",
            card_security_code: "123",
            card_type: "VISA",
          }),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        }
      );
      const responsePaymentJson = (await responsePayment.json()) as {
        address_id: string;
        payment_type: string;
        card_digits: string;
        card_expiration_date: string;
        card_security_code: string;
        card_type: string;
      };
      console.log(responsePaymentJson);
      setPaymentControl(true);
      setTimeout(() => {
        if (responsePayment.ok) {
          setPaymentMade(true);
        } else {
          setPaymentError(true);
        }
      }, 7000);
    } catch (error) {
      console.log("ödeme hatası", error);
    }
  };


  const handlePaymentGuest = () => {
    setPaymentControl(true);
    setTimeout(() => {
      if (basketItems.length > 0) {
        console.log("guest ödeme");
        clearBasket();
        resetCount();
        localStorage.removeItem("basketItems-storage");
        setPaymentMade(true);
        console.log("ife girdi");
        ("if")
      } else {
        setPaymentError(true);
        setPaymentMade(false);
        console.log("elsegirdi");
      }
    }, 7000);
  };

  return (
    <CustomAccordion
      expanded={expanded === "panel3"}
      onChange={handleChangePanel("panel3")}
      title="Ödeme"
      panelNumber={3}
    >
      <Box sx={{ overflow: "hidden" }}>
        {!paymentControl ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (user && user.first_name) {
                handlePayment(e);
              } else {
                handlePaymentGuest();
              }
            }}
          >
            <FormControl sx={{ width: "100%", overflow: "hidden" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedPayment}
                id="payment_type"
                onChange={handlePaymentChange}
                name="radio-buttons-group"
                sx={{ gap: 2 }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    width: "100%",
                    border: "1px solid black",
                    mb: 1,
                  }}
                >
                  <FormControlLabel
                    value="credit_cart"
                    control={<Radio />}
                    label={
                      <Typography variant='subtitle2'>Kredi Kartı</Typography>
                    }
                    sx={{
                      width: "100%",
                      margin: 0,
                      "& .MuiFormControlLabel-label": {
                        width: "100%",
                      },
                    }}
                  />
                </Box>
                {selectedPayment === "credit_cart" && (
                  <CreditCart/>
                )}
                 <PaymentExtra/>
              </RadioGroup>
            </FormControl>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <PaymentSecurity/>
            </Box>
            <Button
              type="submit"
              style={{
                marginTop: 5,
                marginBottom: 2,
                display: "block",
                padding: "10px 0",
                width: "100%",
                margin: "0 auto",
                color: "white",
                backgroundColor: "black",
              }}
            >
              {!paymentControl ? "Ödeme Yap" : "Ödeme Yapılıyor..."}
            </Button>
          </form>
        ) : (
          <PaymentControl
          paymentError={paymentError}
          setPaymentControl={setPaymentControl}
          paymentControl={paymentControl}
          />
        )}
      </Box>
      <Box mt={2}>
        <Typography sx={{ color: "gray" }}>
          <HttpsIcon
            sx={{
              mr: 1,
              fontSize: 20,
              color: "gray",
            }}
          />{" "}
          Ödemeler güvenli ve şifrelidir.
        </Typography>
      </Box>
    </CustomAccordion>
  );
};

export default PaymentSection;
