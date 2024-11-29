import { Payment } from "../../services/Payement";
import { Box, Card, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { photo_url } from "../Bestseller/Bestseller";


interface GuestCartItemsProps {
    items: Payment[];
    onDecrease: (index: number) => void;
    onIncrease: (index: number) => void;
    onDelete: (index: number) => void;
  }
  
const GuestCartItems = ({items,onDecrease, onDelete, onIncrease}:GuestCartItemsProps) => {
  return (
    <>
    {items.map((basket, index)=>(
       <Box mb={1} key={index}>
       <Card
         style={{
           padding: "5px 0",
           backgroundColor: "rgb(247, 247, 247)",
         }}
       >
         <Stack direction={"row"} spacing={2}>
           <img
             style={{
               width: 90,
               height: 90,
               aspectRatio: 1 / 1,
               objectFit: "cover",
             }}
             src={photo_url + basket.img}
             alt="Product"
           />
           <Stack
             direction={"row"}
             spacing={2}
             width="100%"
             justifyContent={"space-between"}
           >
             <Box>
               <Typography
                 variant="subtitle1"
                 mt={1}
                 fontWeight={"bolder"}
                 sx={{fontSize:{xs:13,md:16}}}
               >
                 {basket.name}
               </Typography>
               <Typography variant="subtitle1"
               sx={{fontSize:{xs:13,md:15}}}>
                 {basket.aroma}
               </Typography>
               <Typography variant="subtitle1"sx={{fontSize:{xs:13,md:14}}}>
                 {basket.gram ? basket.gram + "gr" : ""}{" "}
               </Typography>
             </Box>
             <Stack spacing={1} alignItems="flex-end" gap={2} pr={1}>
               <Typography
                 sx={{
                   fontWeight: "bolder",
                   pt: 1,
                   fontSize:{xs:13,md:16}
                 }}
               >
                 {(basket.price * basket.count).toFixed(2)} TL
               </Typography>
               <Box
                 borderRadius={1}
                 padding={"2px 5px"}
                 bgcolor={"white"}
                 sx={{
                   boxShadow: `0 1px 1px rgba(0,1,1,0.5)`,
                   display: "flex",
                   justifyContent: "space-between",
                   my: 1,
                   alignItems: "center",
                   minWidth: 80,
                   maxWidth: 80,
                 }}
               >
                 {basket.count > 1 ? (
                   <button
                     className="remove-button"
                     onClick={() => onDecrease(index)}
                   >
                     -
                   </button>
                 ) : (
                   <DeleteIcon
                     onClick={() => onDelete(index)}
                     sx={{
                       fontSize: 20,
                       "&:hover": {
                         color: "red",
                       },
                     }}
                   />
                 )}
                 <strong>
                   {basket.count}
                 </strong>
                 <button
                   onClick={() => onIncrease(index)}
                   className="increase-button"
                 >
                   +
                 </button>
               </Box>
             </Stack>
           </Stack>
         </Stack>
       </Card>
     </Box>  
    ))}
    </>
  )
}

export default GuestCartItems