import { Box, Typography } from "@mui/material";
import OrdersComp from "./OrdersComponents/OrdersComp";
import { useState } from "react";
import Olderdest from "../Olderders/Olderdest";

const orderData = [
  {
    image: "/images/Orders/orders1.jpeg",
    status: "Teslim Edildi",
    title: "DEEP SLEEP",
    date: "31 Mart 2023 Tarihinde Sipariş Verildi",
    orderNumber: "427795 numaralı sipariş",
  },
  {
    image: "/images/Orders/orders2.jpeg",
    status: "Teslim Edildi",
    title: "MELATONIN - GÜNLÜK VİTAMİN PAKETİ - BROMELAIN",
    date: "14 Aralık 2022 Tarihinde Sipariş Verildi",
    orderNumber: "290405 numaralı sipariş",
  },
  {
    image: "/images/Orders/orders3.jpeg",
    status: "Teslim Edildi",
    title: "GAMER HACK - DETOX PAKETİ",
    date: "19 Kasım 2022 Tarihinde Sipariş Verildi",
    orderNumber: "255564 numaralı sipariş",
  },
  {
    image: "/images/Orders/orders4.jpeg",
    status: "Teslim Edildi",
    title: "CREAM OF RICE",
    date: "1 Ekim 2022 Tarihinde Sipariş Verildi",
    orderNumber: "190462 numaralı sipariş",
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box>
        {!open ? (
          <>
            <Box mb={5}>
              <Typography fontWeight={"bolder"} variant="subtitle1">
                Siparişlerim(4)
              </Typography>
            </Box>
            <Box sx={{ display: "grid", gap: 5 }}>
              {orderData.map((data) => (
                <OrdersComp
                  image={data.image}
                  status={data.status}
                  title={data.title}
                  date={data.date}
                  orderNumber={data.orderNumber}
                  onOpen={()=> setOpen(true)}
                />
              ))}
            </Box>
          </>
        ) : (
          <>
          <Olderdest
          onCloseBsk={()=>setOpen(false)}
          />
          </>
        )}
      </Box>
    </>
  );
};

export default Orders;
