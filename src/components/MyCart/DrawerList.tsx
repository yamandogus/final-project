import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { usePaymentStore } from "../../services/Payement";
import { photo_url } from "../Bestseller/Bestseller";
import { useStore } from "../../Layout/Count";
import CloseIcon from '@mui/icons-material/Close';

interface DrawerProps{
  onCountine: () => void;
  onCloseDrawer: () => void;
}

const DrawerList = ({ onCountine, onCloseDrawer }: DrawerProps) => {
  const { basketItems, removeItems, increaseCount, removeCountDrawer } = usePaymentStore();
  const {removeCount} = useStore()
  const totolPrice = basketItems.reduce((arr, index)=> arr + index.price * index.count, 0).toFixed(2)

  const hadleRemove= (index: number) =>{
    removeItems(index)
    removeCount()
  }



  return (
    <Box
      sx={{ width: 420, height: "100vh", display: 'flex', flexDirection: 'column',justifyContent:"space-between" }}
      role="presentation"
      onClick={(e) => e.stopPropagation()}
    >
     <Box>
     <Typography 
        sx={{ 
          fontWeight: "bolder", 
          fontSize: 18, 
          pt: 1, 
          backgroundColor: "white" 
        }}
      >
        SEPETİM
      </Typography>
        <CloseIcon 
        onClick={()=> onCloseDrawer()}
        sx={{
          position:'absolute',
          top:5,
          right:5,
          cursor:'pointer',
          '&:hover':{
            transition: "color 0.3s ease",
            color:'red'
          }
        }}
        />
     </Box>
      <Divider sx={{ mb: 1 }} />
      <Box 
        sx={{ 
          flex: 1, 
          overflowY: 'auto', 
          overflowX: 'hidden',
          p: 1
        }}
      >
        {basketItems.length === 0 ? (
          <Typography>Sepet Boş</Typography>
        ) : (
          basketItems.map((basket, index) => (
            <Box mb={1} key={index}>
              <Card
                style={{
                  padding: "5px 0",
                  backgroundColor: "rgb(247, 247, 247)"
                }}
              >
                <Stack direction={"row"} spacing={2}>
                  <img style={{
                    width:90,
                    height:90,
                    aspectRatio:1/1,
                    objectFit:"cover"
                  }} src={photo_url + basket.img} alt="Product" />
                  <Stack
                    direction={"row"}
                    spacing={2}
                    width="100%"
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Typography variant='subtitle1' mt={1} fontWeight={'bolder'}>{basket.name}</Typography>
                      <Typography variant='subtitle1'>{basket.aroma}</Typography>
                      <Typography variant='subtitle1'>{basket.gram ? basket.gram + "gr" : ""} </Typography>
                    </Box>
                    <Stack spacing={1} alignItems="flex-end" gap={2} pr={1}>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          pt: 1
                        }}
                      >
                        {(basket.price * basket.count).toFixed(2)} TL
                      </Typography>
                      <Typography
                        borderRadius={1}
                        padding={"2px 5px"}
                        bgcolor={'white'}
                        sx={{
                          boxShadow:`0 1px 1px rgba(0,1,1,0.5)`,
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          minWidth:80,
                          maxWidth:80,
                        }}
                      >
                        {basket.count > 1 ? (
                          <button className="remove-button" onClick={()=> removeCountDrawer(index)}>-</button>
                        ): 
                        <DeleteIcon
                        onClick={()=>hadleRemove(index)}
                          sx={{
                            fontSize: 20,
                            '&:hover': {
                              color: "red"
                            }
                          }}
                        />   
                        }
                         <strong style={{ margin: "0 15px" }}>{basket.count}</strong>
                        <button onClick={()=> increaseCount(index)} className="increase-button">+</button>
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </Box>
          ))
        )}
      </Box>
      <Box
        sx={{ padding: "16px", borderTop: "1px solid #ddd" }}
      >
        <Typography
          variant="subtitle1"
          fontSize={18}
          fontWeight={"bolder"}
          textAlign={"end"}
          mr={5}
        >
          Toplam {totolPrice} TL
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            width: "100%",
            backgroundColor: "black",
            "&:hover": { backgroundColor: "black" },
          }}
          onClick={() => {
            onCountine();
          }}
        >
          <Link
            onClick={onCountine}
            style={{ textDecoration: "none", color: "white"}}
            to={"PaymentPage"}
          >
            DEVAM ET
          </Link>{" "}
          <ArrowRightIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default DrawerList;

