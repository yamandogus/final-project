import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, TextField, Stack, Checkbox, Button, Modal } from "@mui/material";
import { useState } from "react";
import HttpsIcon from "@mui/icons-material/Https";
import CustomAccordion from "./customAccordion";

interface PaymentSectionProps {
  expanded: string | false;
  handleChangePanel: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  handlePaymentMethod: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}) => {
  const [open, setOpen] = useState(false);
  const [security, setSecurity] = useState(false);
  const [sales, setSales] = useState(false);

  return (
    <CustomAccordion
      expanded={expanded === "panel3"}
      onChange={handleChangePanel("panel3")}
      title="Ödeme"
      panelNumber={3}
    >
      <Box>
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Kredi Kartı"
            onChange={handlePaymentMethod}
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
              <FormControlLabel value="Kredi Kartı" control={<Radio />} label="Kredi Kartı" />
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
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length > 16) value = value.slice(0, 16);
                      value = value.match(/.{1,4}/g)?.join(" ") || "";
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
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length > 4) value = value.slice(0, 4);
                      if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
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
                  onClick={() => setOpen((newOpen) => !newOpen)}
                  size="small"
                />
                Kartımı{" "}
                <img width={70} src="/images/master/master.png" alt="" />
                altyapısında kullanmak <a href="">istiyorum.</a>
              </Stack>
              {open ? (
                <Stack gap={2}>
                  <TextField fullWidth placeholder="Kart ismi" />
                  <TextField fullWidth placeholder="+90 111 111 11 11" />
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
                  <Box display="flex" justifyContent="space-between" width="100%" gap={17}>
                    <Typography variant="subtitle1">Kapıda Ödeme (Nakit)</Typography>
                    <Typography sx={{ fontWeight: "bolder" }} variant="subtitle1">
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
                  <Box display="flex" justifyContent="space-between" width="100%" gap={12}>
                    <Typography variant="subtitle1">Kapıda Ödeme (Kredi Kartı)</Typography>
                    <Typography sx={{ fontWeight: "bolder" }} variant="subtitle1">
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
            gap: 0.5,
          }}
        >
          <Checkbox required />
          <strong onClick={() => setSecurity(true)}>Gizlilik Sözleşmemi</strong>
          ve
          <strong onClick={() => setSales(true)}>Satış sözleşmemi</strong>
          okudum, onaylıyorum.
        </Box>
        <Modal open={security} onClose={() => setSecurity(false)}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2">
              Gizlilik Sözleşmesi
            </Typography>
            <Typography sx={{ mt: 2 }}>
              1. Kişisel Veriler: Kişisel verileriniz gizli tutulacak ve üçüncü taraflarla paylaşılmayacaktır.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              2. Veri Güvenliği: Verilerinizi korumak için en son güvenlik önlemlerini kullanıyoruz.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              3. Veri Kullanımı: Verileriniz sadece siparişinizi işlemek için kullanılacaktır.
            </Typography>
          </Box>
        </Modal>
        <Modal open={sales} onClose={() => setSales(false)}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2">
              Satış Sözleşmesi
            </Typography>
            <Typography sx={{ mt: 2 }}>
              1. Sipariş ve Teslimat: Siparişiniz, belirtilen teslimat süresi içinde adresinize gönderilecektir.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              2. İade Politikası: Ürünleri, teslim tarihinden itibaren 14 gün içinde iade edebilirsiniz.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              3. Garanti Şartları: Satın aldığınız ürünler, 1 yıl boyunca garanti kapsamındadır.
            </Typography>
          </Box>
        </Modal>
        <Button
          style={{
            marginTop: 5,
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