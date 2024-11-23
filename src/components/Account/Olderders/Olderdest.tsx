import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { FC, FormEvent, useEffect, useState } from "react";
import { base_url, photo_url } from "../../Bestseller/Bestseller";
import { CommentsProps, Order } from "../../../services/type";
import CommentsComponent from "../Comment/Comment";

interface OlderdestProps {
  onCloseBsk: () => void;
  orderId: string;
}

export const Olderdest: FC<OlderdestProps> = ({ onCloseBsk, orderId }) => {
  const [ordersDetails, setOrderDetails] = useState<Order>();
  const [open, setOpen] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await fetch(`${base_url}/orders/${orderId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      setOrderDetails(responseJson.data);
    };
    fetchOrderDetails();
  }, [orderId]);

  const handleToggleComment = (index: number) => {
    setOpen((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const commentSubmit= async(e:FormEvent, index: number) =>{
    e.preventDefault()
    const formEl = e.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as CommentsProps;
    console.log("data",data);    
    try {
        const response = await fetch(base_url + `/products/${ordersDetails?.shopping_cart.items[index].product_slug}/comments`, {
          method:"POST",
          body:JSON.stringify(data),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          }
        })
        const responseJson = response.json() 
        console.log(responseJson);
    } catch (error) {
      console.log("Yorum atılamadı", error);
      
    }
  }


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button sx={{ textTransform: "none" }} onClick={onCloseBsk}>
          ⬅ Tüm siparişlerim
        </Button>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h5" sx={{ paddingBottom: 3 }}>
          {ordersDetails?.order_status === "delivered"
            ? "Sipariş Teslim Edildi"
            : ordersDetails?.order_status === "in_cargo"
            ? "Sipariş Kargoda"
            : ordersDetails?.order_status === "getting_ready"
            ? "Sipariş Hazırlanıyor"
            : ""}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ borderBottom: "1px solid black", paddingBottom: 3, marginBottom: 3 }}
        >
          14 Aralık 2022 Tarihinde Sipariş Verildi -{" "}
          <b>{ordersDetails?.order_no}</b> numaralı sipariş
        </Typography>
        {ordersDetails?.shopping_cart.items.map((item, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Box display="flex" gap={2} alignItems="center">
              <img
                src={photo_url + item.product_variant_detail.photo_src}
                alt=""
                style={{ width: 100, height: 100 }}
              />
              <Box>
                <Typography variant="subtitle2">
                  {item.product} X {item.pieces}
                </Typography>
                <Typography variant="subtitle1" sx={{fontSize:14}}>
                  {item.unit_price * item.pieces} TL
                </Typography>
                <Typography variant="subtitle1" sx={{fontSize:14}}>
                  Boyut: {item.product_variant_detail.size.gram} gr /{" "}
                  {item.pieces} KUTU
                </Typography>
              </Box>
            </Box>
            <Box mt={1}>
              <Typography
                variant='subtitle2'
                onClick={() => handleToggleComment(index)}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Yorum ekle
              </Typography>
              {open[index] && (
                <Box mt={2}>
                  <Typography variant="subtitle2">Genel Puan</Typography>
                  <form onSubmit={(e)=>commentSubmit(e,index)}>
                    <CommentsComponent/>
                  </form>
                </Box>
              )}
            </Box>
          </Box>
        ))}
        <Box display="flex" gap={1} mt={3}>
          <Typography>hepsiJet</Typography>
          <Typography>Takip Numarası:</Typography>
          <Typography>HJ{ordersDetails?.shipment_tracking_number}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ borderBottom: "1px solid black", paddingBottom: 2, marginBottom: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Adres
          </Typography>
          <Typography variant="subtitle2">Doğuş Yaman</Typography>
          <Typography
            variant="subtitle2"
            sx={{ textDecoration: "underline" }}
          >
            {ordersDetails?.address.full_address}
          </Typography>
        </Box>
        <Box sx={{ borderBottom: "1px solid black", paddingBottom: 2, marginBottom: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Ödeme
          </Typography>
          <Typography variant="subtitle2">
            {ordersDetails?.payment_detail.payment_type === "credit_cart"
              ? "Kredi Kartı"
              : ""}{" "}
            - {ordersDetails?.payment_detail.final_price} TL
          </Typography>
          <Typography variant="subtitle2">
            **** **** **** **{ordersDetails?.payment_detail.card_digits.slice(-2)}
          </Typography>
        </Box>
        <Box sx={{ borderBottom: "1px solid black", paddingBottom: 2, marginBottom: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Özet
          </Typography>
          <Box display="flex" justifyContent="space-between" marginTop={1}>
            <Typography variant="subtitle2">Ara Toplam</Typography>
            <Typography>{ordersDetails?.payment_detail.base_price} TL</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle2">Kargo</Typography>
            <Typography>{ordersDetails?.payment_detail.shipment_fee} TL</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle2">Yüzde 10 İndirim!</Typography>
            <Typography>{ordersDetails?.payment_detail.discount_amount} TL</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" fontWeight="bold">
            <Typography variant="subtitle2">Toplam</Typography>
            <Typography>{ordersDetails?.payment_detail.final_price} TL</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            Yardıma mı ihtiyacın var?
          </Typography>
          <Typography variant="subtitle2">Sıkça Sorulan Sorular</Typography>
          <Typography variant="subtitle2">Satış Sözleşmesi</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Olderdest;
