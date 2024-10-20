import { Box, Grid, Stack, Typography } from "@mui/material";
import { photo_url } from "../bestseller/BestSellers";

interface OrderSummaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  basketItems: any[];
  paymentMethod: string;
  extra: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ basketItems, paymentMethod, extra }) => {
  const total: number = basketItems.reduce((tot, item) => tot + item.price * item.count, 0);

  return (
    <Box sx={{ position: "relative", height: "calc(100vh - 100px)" }}>
      <Grid
        container
        spacing={2}
        sx={{
          overflowY: "scroll",
          maxHeight: "calc(100vh - 200px)",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
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
              <Box display={"flex"} alignItems={"center"} position={"relative"}>
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
                  <Typography variant="subtitle1" color="rgb(139, 138, 146)">
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
      </Grid>
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundColor: "white",
            pt: 2,
            borderTop: "1px solid gray",
            gap: 1,
          }}
        >
          <Stack width={"100%"} direction={"row"} display="flex" justifyContent="space-between">
            <Typography>Ara Toplam</Typography>
            <Typography>{total.toFixed(2)} TL</Typography>
          </Stack>
          {total > 3000 ? (
            <Stack
              width={"100%"}
              direction={"row"}
              display="flex"
              justifyContent="space-between"
              color={"green"}
            >
              <Typography fontWeight={"bolder"}>%10 İndirim</Typography>
              <Typography fontWeight={"bolder"}>-{((total * 10) / 100).toFixed(2)} TL</Typography>
            </Stack>
          ) : (
            ""
          )}
          {extra > 1 ? (
            <Stack
              width={"100%"}
              direction={"row"}
              display="flex"
              justifyContent="space-between"
            >
              <Typography fontWeight={"bolder"}>{paymentMethod}</Typography>
              <Typography fontWeight={"bolder"}>{extra} TL</Typography>
            </Stack>
          ) : (
            ""
          )}
          <Stack width={"100%"} direction={"row"} display="flex" justifyContent="space-between">
            <Typography fontWeight={"bolder"}>Toplam</Typography>
            <Typography fontWeight={"bolder"}>
              {(total - (total * 10) / 100 + extra).toFixed(2)} TL
            </Typography>
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderSummary;