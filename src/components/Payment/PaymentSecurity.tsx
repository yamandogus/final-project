import { Box, Checkbox, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../../layout/navbar";

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

const PaymentSecurity = () => {
  const [security, setSecurity] = useState(false);
  const [sales, setSales] = useState(false);
  const { user } = useLoaderData() as LoaderData;
  return (
    <div>
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
        <Box>
          <Checkbox required /> Fatura adresim teslimat adresimle aynı.
        </Box>
        <Box>
          <Checkbox required />
          <a
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => setSecurity(true)}
          >
            Gizlilik sözleşmemi
          </a>{" "}
          ve{" "}
          <a
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => setSales(true)}
          >
            Satış sözleşmemi{" "}
          </a>
          okudum, onaylıyorum.
        </Box>
      </Box>
      <Modal open={security} onClose={() => setSecurity(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Gizlilik Sözleşmesi
          </Typography>
          <Typography sx={{ mt: 2 }}>
            1. Kişisel Veriler: Kişisel verileriniz gizli tutulacak ve üçüncü
            taraflarla paylaşılmayacaktır.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            2. Veri Güvenliği: Verilerinizi korumak için en son güvenlik
            önlemlerini kullanıyoruz.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            3. Veri Kullanımı: Verileriniz sadece siparişinizi işlemek için
            kullanılacaktır.
          </Typography>
        </Box>
      </Modal>
      <Modal open={sales} onClose={() => setSales(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Satış Sözleşmesi
          </Typography>
          <Typography sx={{ mt: 2 }}>
            1. Sipariş ve Teslimat: Siparişiniz, belirtilen teslimat süresi
            içinde adresinize gönderilecektir.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            2. İade Politikası: Ürünleri, teslim tarihinden itibaren 14 gün
            içinde iade edebilirsiniz.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            3. Garanti Şartları: Satın aldığınız ürünler, 1 yıl boyunca garanti
            kapsamındadır.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PaymentSecurity;
