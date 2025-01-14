import { Box, Button } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LoadingButton } from "@mui/lab";

interface paymentControlProps {
  paymentError: boolean;
  setPaymentControl: (value: boolean) => void;
  paymentControl: boolean;
}

const PaymentControl = ({
  paymentError,
  setPaymentControl,
    paymentControl,
}: paymentControlProps) => {
  return (
    <Box>
      {!paymentError ? (
        <>
          <DotLottieReact
            src="https://lottie.host/cc2e55e4-6b7c-4145-a7f4-6f0b50ae2138/CX07qgFKCn.lottie"
            loop
            autoplay
          />
          <Box mt={2}>
            <LoadingButton
              className="payment-btn"
              sx={{
                cursor: "pointer",
              }}
              loading={!paymentControl ? false : true}
              loadingPosition="end"
              variant="contained"
            >
              {!paymentControl ? "Ödeme Yap" : "Ödeme Yapılıyor..."}
            </LoadingButton>
          </Box>
        </>
      ) : (
        <>
          <DotLottieReact
            src="https://lottie.host/18aeb844-0759-49d5-97b9-4380cdf39aea/XHjGFluLRG.lottie"
            loop
            autoplay
          />
          <Box mt={2}>
            <Button
              className="payment-btn"
              onClick={() => setPaymentControl(false)}
              sx={{
                cursor: "pointer",
              }}
              variant="contained"
            >
              Tekrar Dene
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PaymentControl;
