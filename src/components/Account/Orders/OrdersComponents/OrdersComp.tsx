import { Avatar, Button, Grid, Typography } from "@mui/material";

interface OrdersCompProp{
    image: string;
    status: string;
    title: string;
    date: string;
    orderNumber: string;
    onOpen: ()=> void;
}

const OrdersComp = ({image, status, title, date,orderNumber, onOpen}:OrdersCompProp) => {
  return (
    <>
      <Grid
        container
        gap={1}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 1)", pb:1}}
      >
        <Grid  item lg={2} sx={{ display: { xs: "none", md: "block" } }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
            }}
            src={image}
            variant="square"
          ></Avatar>
        </Grid>
        <Grid item xs={12} md={6} spacing={1} textAlign={"start"}>
          <Typography fontWeight={'bolder'} fontSize={14} color={"green"} variant="subtitle1">
            {status}
          </Typography>
          <Typography fontWeight={"bolder"} variant="subtitle1">
            {title}
          </Typography>
          <Typography variant="subtitle1">
            {date}{" "}
          </Typography>
          <Typography variant="subtitle1"> {orderNumber}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button onClick={onOpen} variant="outlined">Detayı Görüntüle</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default OrdersComp;
