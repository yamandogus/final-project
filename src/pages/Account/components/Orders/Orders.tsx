import { Box, Divider, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { userProfileLoaderReturn } from "../Informations/MyAccount";
import OrdersComp from "./OrdersComponents/OrdersComp";
import { photo_url } from "../../../../components/Bestseller/BestsellerPage";
import Olderdest from "../Olderders/Olderdest";

const Orders = () => {
  const [open, setOpen] = useState(false);
  const { orders } = useLoaderData() as userProfileLoaderReturn;
  const [orderId, setOrderId] = useState("");
  const [page, setPage] = useState(1);
  const ordersLimit = 4;

  const handleChangePage = (_: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  const ordersData = Array.isArray(orders) ? orders : [];
  const totalPages = Math.ceil(ordersData.length / ordersLimit);
  const startIndex = (page - 1) * ordersLimit;
  const selectedOrders = ordersData.slice(startIndex, startIndex + ordersLimit);

  return (
    <>
      <Box>
        {!open ? (
          <>
            <Box mb={5}>
              <Typography fontWeight={"bolder"} variant="subtitle1">
                Siparişlerim({orders.length})
              </Typography>
            </Box>
            <Box sx={{ display: "grid", gap: 5 }}>
              <Divider />
              {selectedOrders.map((data, index) => (
                <OrdersComp
                  key={index}
                  image={photo_url + data.cart_detail[0].photo_src}
                  status={
                    data.order_status === "delivered"
                      ? "✅ Sipariş Teslim Edildi"
                      : data.order_status === "in_cargo"
                      ? "📦 Sipariş Kargoda"
                      : data.order_status === "getting_ready"
                      ? "⏳ Sipariş Hazırlanıyor"
                      : ""
                  }
                  title={data.cart_detail[0].name}
                  date={data.created_at
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join(".")}
                  orderNumber={data.order_no}
                  onOpen={() => {
                    setOpen(true);
                    setOrderId(data.order_no);
                  }}
                />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </Box>
          </>
        ) : (
          <>
            <Olderdest onCloseBsk={() => setOpen(false)} orderId={orderId} />
          </>
        )}
      </Box>
    </>
  );
};

export default Orders;
