import { Box, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 2,
        padding: 2,
        textAlign: "center",
      }}
    >
    <img width={200} src="/public/images/Logo/Logo1.png" alt="" />
      <Typography variant="h4" sx={{ color: "black", fontWeight: "bolder" }}>
        Hoşgeldiniz
      </Typography>
      <Typography variant="h6" sx={{ color: "black", fontWeight: "bolder" }}>
        Bu site eğitim amacı ile yapılmıştır.
        <br />
        Ödeme işlemlerinde kredi kartı bilgilerinizi girmemenizi rica ederim.
      </Typography>
      <Typography variant="h6" sx={{ color: "gray", fontWeight: "bolder" }}>
        Doğuş Yaman
      </Typography>
    </Box>
  );
};

export default Loading;
