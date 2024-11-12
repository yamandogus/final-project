import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface OlderdestProps {
  onCloseBsk: () => void;
}

export const Olderdest: FC<OlderdestProps> = ({ onCloseBsk }) => {
  return (
      <Grid container>
        <Grid item xs={12} md={8}>
          <Typography sx={{ pb: 3 }} variant="h4">
            Sipariş Teslim Edildi
          </Typography>
          <Typography
            sx={{ width: "90%", borderBottom: "1px solid black", pb: 3, mb: 3 }}
            variant="subtitle2"
          >
            14 Aralık 2022 Tarihinde Sipariş Verildi - 290405 numaralı sipariş
          </Typography>
          <Grid xs={12}>
            <Stack className="textBottom" direction={"row"} spacing={3}>
              <img className="accountImg" src="/images/6card/pg3.jpeg" alt="" />
              <Stack>
                <Typography variant="subtitle2">MELATONIN X 2</Typography>
                <Typography variant="subtitle2">62 TL</Typography>
                <Typography variant="subtitle2">Boyut: 1 KUTU</Typography>
              </Stack>
            </Stack>
            <Stack className="textBottom" direction={"row"} spacing={3}>
              <img className="accountImg" src="/images/6card/pg1.jpeg" alt="" />
              <Stack>
                <Typography variant="subtitle2">
                  GÜNLÜK VİTAMİN PAKETİ x 1{" "}
                </Typography>
                <Typography variant="subtitle2">449 TL</Typography>
                <Typography variant="subtitle2">
                  Boyut: 1 Paket x 2 Adet
                </Typography>
              </Stack>
            </Stack>
            <Stack className="textBottom" direction={"row"} spacing={3}>
              <img className="accountImg" src="/images/6card/pg6.jpeg" alt="" />
              <Stack>
                <Typography variant="subtitle2">BROMELAIN</Typography>
                <Typography variant="subtitle2">197 TL</Typography>
                <Typography variant="subtitle2">
                  Boyut: 1 KUTU x 2 Adet
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Stack direction={"row"} spacing={2} sx={{ mb: 3 }}>
            <Typography>hepsiJet</Typography>
            <Typography>Takip Numarası:</Typography>
            <Typography>HJ2192904051</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack
            direction={"column"}
            spacing={1}
            sx={{ borderBottom: "1px solid black", pb: 2, mb: 3 }}
          >
            <Typography variant="subtitle1" fontWeight={"bolder"}>
              Adres
            </Typography>
            <Typography variant="subtitle2">UĞUR İLTER</Typography>
            <Typography
              variant="subtitle2"
              sx={{ textDecorationLine: "underline" }}
            >
              Barbaros, Nidakule Ataşehir Batı, Begonya Sk. No: 1/2, 34746
              Ataşehir/İstanbul
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            spacing={1}
            sx={{ borderBottom: "1px solid black", pb: 2, mb: 3 }}
          >
            <Typography variant="subtitle1" fontWeight={"bolder"}>
              Ödeme
            </Typography>
            <Typography variant="subtitle2">Kredi Kartı-770 tl</Typography>
            <Typography variant="subtitle2">**** **** **** **61</Typography>
          </Stack>
          <Box sx={{ borderBottom: "1px solid black", pb: 2, mb: 3 }}>
            <Typography variant="subtitle1" fontWeight={"bolder"}>
              Özet
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2">Ara Toplam</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography>856 TL</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle2">Kargo</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography>0 TL</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle2">Toplam Vergi</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography>8 TL</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle2">Yüzde 10 İndirim!</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography>-86 TL</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography fontWeight={"bolder"} variant="subtitle2">
                  Toplam
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography fontWeight={"bolder"}>770 TL</Typography>
              </Grid>
            </Grid>
          </Box>
          <Stack direction={"column"} spacing={1}>
            <Typography variant="subtitle1" fontWeight={"bolder"}>
              Yardıma mı ihtiyacın var ?
            </Typography>
            <Typography variant="subtitle2">Sıkça Sorulan Sorular</Typography>
            <Typography variant="subtitle2">Satış Sözleşmesi</Typography>
          </Stack>
        </Grid>
        <Button onClick={onCloseBsk}>Siparişlerim</Button>
      </Grid>
  );
};

export default Olderdest;
