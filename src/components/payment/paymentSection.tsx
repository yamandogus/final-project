import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Stack,
  Checkbox,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { useState } from "react";
import HttpsIcon from "@mui/icons-material/Https";
import CustomAccordion from "./customAccordion";
import useSnackbar from "../../hooks/alert";
import { base_url } from "../Bestseller/Bestseller";
import { AccountProps } from "../Account/Informations/MyAccount";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LoadingButton } from "@mui/lab";
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

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const PaymentSection: React.FC<PaymentSectionProps> = ({
  expanded,
  handleChangePanel,
  handlePaymentMethod,
  setPaymentMade,
  selectedAddressId,
  user,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("credit_cart");
  const [security, setSecurity] = useState(false);
  const [sales, setSales] = useState(false);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [paymentText, setPaymentText] = useState(false);

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
      if (responsePayment.ok) {
        showSnackbar("Ödeme Yapıldı", "success");
        setPaymentMade(true);
      }
    } catch (error) {
      console.log("ödeme hatası", error);
      showSnackbar("Ödeme Başarısız", "error");
    }
  };
  const handlePaymentFree = () => {
    setPaymentText(true);
    setTimeout(() => {
      setPaymentMade(true);
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
        {!paymentText ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (user && user.first_name) {
                handlePayment(e);
              } else {
                handlePaymentFree();
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
                    width: "100%",
                  }}
                >
                  <FormControlLabel
                    value="credit_cart"
                    control={<Radio />}
                    label="Kredi Kartı"
                  />
                  {selectedPayment === "credit_cart" && (
                    <Box>
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          p: 3,
                          borderRadius: 2,
                          backgroundColor: "#f9f9f9",
                          boxShadow: 2,
                        }}
                      >
                        <Stack gap={3}>
                          <TextField
                            sx={{
                              backgroundColor: "white",
                              borderRadius: 1,
                              "& .MuiInputBase-root": {
                                borderRadius: 1,
                              },
                            }}
                            fullWidth
                            id="card_digits"
                            type="text"
                            placeholder="Kart Numarası"
                            inputProps={{
                              inputMode: "numeric",
                              maxLength: 19,
                              pattern:
                                "^[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}$",
                            }}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, "");
                              if (value.length > 16) value = value.slice(0, 16);
                              value = value.match(/.{1,4}/g)?.join(" ") || "";
                              e.target.value = value;
                            }}
                          />
                          <TextField
                            sx={{
                              backgroundColor: "white",
                              borderRadius: 1,
                              "& .MuiInputBase-root": {
                                borderRadius: 1,
                              },
                            }}
                            fullWidth
                            required
                            placeholder="Kart üzerindeki isim"
                            type="text"
                          />
                        </Stack>

                        <Stack direction={"row"} gap={3} mt={3}>
                          <TextField
                            sx={{
                              backgroundColor: "white",
                              borderRadius: 1,
                              "& .MuiInputBase-root": {
                                borderRadius: 1,
                              },
                            }}
                            fullWidth
                            required
                            id="card_expiration_date"
                            placeholder="Ay-Yıl"
                            inputProps={{
                              inputMode: "numeric",
                              maxLength: 5,
                              pattern: "[0-9/]*",
                            }}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, "");
                              if (value.length > 4) value = value.slice(0, 4);
                              if (value.length > 2)
                                value =
                                  value.slice(0, 2) + "-" + value.slice(2);
                              e.target.value = value;
                            }}
                          />
                          <TextField
                            id="card_security_code"
                            sx={{
                              backgroundColor: "white",
                              borderRadius: 1,
                              "& .MuiInputBase-root": {
                                borderRadius: 1,
                              },
                            }}
                            fullWidth
                            required
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
                          onClick={() => setOpen((newOpen) => !newOpen)}
                          size="small"
                        />
                        Kartımı{" "}
                        <img
                          width={70}
                          src="/images/master/master.png"
                          alt=""
                        />
                        altyapısında kullanmak <a href="">istiyorum.</a>
                      </Stack>
                      {open ? (
                        <Stack gap={2} mb={1}>
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
                  )}
                </Box>
                <Box
                  sx={{
                    borderRadius: 3,
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
                          45 TL işlem bedeli
                        </Typography>
                      </Box>
                    }
                    sx={{ width: "100%" }}
                  />
                </Box>
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
              <Checkbox required /> Fatura adresim teslimat adresimle aynı
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexWrap: "wrap",
                wordWrap: "break-word",
                gap: 0.5,
                mb: 2,
              }}
            >
              <Checkbox required />
              <a
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => setSecurity(true)}
              >
                Gizlilik sözleşmemi
              </a>
              ve
              <a
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => setSales(true)}
              >
                Satış sözleşmemi
              </a>
              okudum, onaylıyorum.
            </Box>
            <Modal open={security} onClose={() => setSecurity(false)}>
              <Box sx={modalStyle}>
                <Typography variant="h6" component="h2">
                  Gizlilik Sözleşmesi
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  1. Kişisel Veriler: Kişisel verileriniz gizli tutulacak ve
                  üçüncü taraflarla paylaşılmayacaktır.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  2. Veri Güvenliği: Verilerinizi korumak için en son güvenlik
                  önlemlerini kullanıyoruz.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  3. Veri Kullanımı: Verileriniz sadece siparişinizi işlemek
                  için kullanılacaktır.
                </Typography>
              </Box>
            </Modal>
            <Modal open={sales} onClose={() => setSales(false)}>
              <Box sx={modalStyle}>
                <Typography variant="h6" component="h2">
                  Satış Sözleşmesi
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  1. Sipariş ve Teslimat: Siparişiniz, belirtilen teslimat
                  süresi içinde adresinize gönderilecektir.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  2. İade Politikası: Ürünleri, teslim tarihinden itibaren 14
                  gün içinde iade edebilirsiniz.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  3. Garanti Şartları: Satın aldığınız ürünler, 1 yıl boyunca
                  garanti kapsamındadır.
                </Typography>
              </Box>
            </Modal>
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
              {!paymentText ? "Ödeme Yap" : "Ödeme Yapılıyor..."}
            </Button>
          </form>
        ) : (
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
              cursor:'pointer',
            }}
              loading={!paymentText ? false : true}
              loadingPosition="end"
              variant="contained"
            >
              {!paymentText ? "Ödeme Yap" : "Ödeme Yapılıyor..."}
            </LoadingButton>
            </Box>
          </>
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
      <SnackbarComponent />
    </CustomAccordion>
  );
};

export default PaymentSection;
