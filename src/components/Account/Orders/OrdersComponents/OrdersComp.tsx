import { Box, Button, Grid, Typography } from "@mui/material";

interface OrdersCompProp {
  image: string;
  status: string;
  title: string;
  date: string;
  orderNumber: string;
  onOpen: () => void;
}

const OrdersComp = ({
  image,
  status,
  title,
  date,
  orderNumber,
  onOpen,
}: OrdersCompProp) => {
  return (
    <>
      <Grid
        container
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 1)", pb: 1 }}
      >
        <Grid item sm={2} sx={{ display: { xs: "none", md: "block" } }}>
          <img
            style={{
              width: 100,
              height: 100,
            }}
            src={image}
          ></img>
        </Grid>
        <Grid item xs={12} sm={6} gap={1} textAlign={"start"}>
          <Typography
            fontWeight={"bolder"}
            fontSize={14}
            color={"green"}
            variant="subtitle1"
          >
            {status}
          </Typography>
          <Typography fontWeight={"bolder"} variant="subtitle1">
            {title}
          </Typography>
          <Typography variant="subtitle1">
            {date} tarihinde sipariş verildi.
          </Typography>
          <Typography variant="subtitle1">
            {orderNumber} numaralı sipariş.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={onOpen} variant="outlined">
              Detayı Görüntüle
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OrdersComp;
