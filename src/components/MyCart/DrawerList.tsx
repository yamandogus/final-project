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
import { usePaymentStore } from "../../pages/Payement";
import { photo_url } from "../Bestseller/CokSatanlar";
import { useStore } from "../../Layout/Count";

const DrawerList = ({ onCountine }: { onCountine: () => void }) => {
  const { basketItems, removeItems } = usePaymentStore();
  const {removeCount} = useStore()

  const hadleRemove= (index: number) =>{
    removeItems(index)
    removeCount()
  }
  return (
    <Box
      sx={{ width: 360, height: "100vh", display: 'flex', flexDirection: 'column' }}
      role="presentation"
      onClick={(e) => e.stopPropagation()}
    >
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
                  <img width={90} height={80} src={photo_url + basket.img} alt="Product" />
                  <Stack
                    direction={"row"}
                    spacing={2}
                    width="100%"
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Typography mt={1} fontWeight={'bolder'}>{basket.name}</Typography>
                      <Typography variant='subtitle1'>{basket.aroma}</Typography>
                      <Typography variant='subtitle1'>{basket.gram ? basket.gram : ""}</Typography>
                    </Box>
                    <Stack spacing={1} alignItems="flex-end" gap={2} pr={1}>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          pt: 1
                        }}
                      >
                        {Math.ceil(basket.price)} TL
                      </Typography>
                      <Typography
                        borderRadius={1}
                        padding={"2px 5px"}
                        bgcolor={'white'}
                        
                        sx={{
                          boxShadow:`0 1px 1px rgba(0,1,1,0.5)`
                        }}
                      >
                        <DeleteIcon
                        onClick={()=>hadleRemove(index)}
                          sx={{
                            fontSize: 20,
                            '&:hover': {
                              color: "red"
                            }
                          }}
                        /> 
                        <strong style={{ margin: "0 15px" }}>1</strong>
                        <button className="increase-button">+</button>
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </Box>
          ))
        )}
      </Box>
      <Stack
        width={'100%'}
        marginBottom={1}
        textAlign={"center"}
        position={"relative"}
        bottom={0}
      >
        <Typography
          variant="subtitle2"
          fontWeight={"bolder"}
          textAlign={"end"}
          mr={5}
        >
          Toplam 499 TL
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            px: 10,
            mx: 5,
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
      </Stack>
    </Box>
  );
};

export default DrawerList;

