import { Box, Typography } from "@mui/material";
import OrdersComp from "./OrdersComponents/OrdersComp";
import { useState } from "react";
import Olderdest from "../Olderders/Olderdest";
import { useLoaderData } from "react-router-dom";
import { userProfileLoaderReturn } from "../Informations/MyAccount";

const orderData = {
  image: "/images/Orders/orders1.jpeg",
  title: "DEEP SLEEP",
}
  
   
  


const Orders = () => {
  const [open, setOpen] = useState(false);
  const {orders} = useLoaderData() as userProfileLoaderReturn
  const [orderId, setOrderId] = useState("")
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
              {orders.map((data, index) =>(
                <OrdersComp
                key={index}
                image={orderData.image}
                status={
                  data.order_status ==="delivered" ? "Teslim Edildi":
                  data.order_status ==="in_cargo" ? "Korgoda":
                  data.order_status === "getting_ready"? "Hazırlanıyor":""
                }
                title={orderData.title}
                date={data.created_at.split("T")[0].split("-").reverse().join(".")}
                orderNumber={data.order_no}
                onOpen={()=> {
                  setOpen(true)
                  setOrderId(data.order_no)
                }}
              />
              ))}
            </Box>
          </>
        ) : (
          <>
          <Olderdest
          onCloseBsk={()=>setOpen(false)}
          orderId={orderId}
          />
          </>
        )}
      </Box>
    </>
  );
};

export default Orders;
