import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Aroma from '../Aroma/Aroma'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useEffect, useState } from 'react';



const depo = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState<number>(0)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document
          .querySelectorAll<HTMLDivElement>(".checkbox-div")
          .forEach((div) => {
            div.addEventListener("click", () => {
              const checkbox =
                div.querySelector<HTMLInputElement>(".checkbox-input");
              if (checkbox) {
                checkbox.checked = !checkbox.checked;
                div.classList.toggle("selected", checkbox.checked);
              }
            });
          });
      }, []);
  return (
    <div>
               <Typography variant="subtitle1" sx={{ fontWeight: "bolder", my: 1 }}>
                AROMA:
              </Typography>
              <Grid container  width={"calc(100% + 16px)"}>
                <Grid item xs={4}>
                  <Aroma aroma={"büskivi"} color="rgba(230, 188, 121, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Çikolata"} color="rgba(86, 50, 29, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Muz"} color="rgba(241, 208, 24, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Salted Caramel"} color="rgba(182, 67, 0, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Choco Nut"} color="rgba(123, 63, 0, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma
                    aroma={"Hindistan Cevizi"}
                    color="rgba(186, 144, 81, 1)"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Aroma
                    aroma={"Raspberry Cheesecake"}
                    color="rgba(204, 30, 95, 1)"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Çilek"} color="rgba(214, 31, 51, 1)" />
                </Grid>
              </Grid>
              <Typography variant="subtitle1" sx={{ fontWeight: "bolder", my: 1 }}>
                BOYUT :
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div className="checkbox-container">
                    <div className="checkbox-div">
                      <label className="checkbox-label">
                        <Stack width={'100%'}  sx={{p:2}}>400G <br /> 16 servis</Stack>
                        <input type="checkbox" className="checkbox-input" />
                        <span className="custom-checkbox"></span>
                      </label>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="checkbox-container">
                    <div className="checkbox-div">
                      <label className="checkbox-label">
                        <Stack width={'100%'}  sx={{p:2}}>1.6 KG <br /> 64 servis</Stack>
                        <input type="checkbox" className="checkbox-input" />
                        <span className="custom-checkbox"></span>
                      </label>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="checkbox-container">
                    <div className="checkbox-div">
                      <label className="checkbox-label">
                      <Stack width={'100%'} sx={{p:2, px:1}}>6KG X 2 ADET <br /> 128 servis</Stack>
                        <input type="checkbox" className="checkbox-input" />
                        <span className="custom-checkbox"></span>
                      </label>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Box sx={{display:"flex", justifyContent:'space-between',my:3}}>
                <Box>
                  <span style={{fontSize:30, fontWeight:'bolder'}}>
                    549 TL
                  </span>
                </Box>
                <Box>
                  <span>
                    34.31 TL /Servis
                  </span>
                </Box>
              </Box>
              <Box sx={{display:'flex', my:3}}>
                <Box component={'div'} className="countDiv"
                >
                  <button className="countButton" onClick={()=> setCount(count ? count-1 : 0)}>-</button><span className="countCart">{count}</span><button className="countButton"  onClick={()=>setCount(count+1)}>+</button>
                </Box>
                <Box>
                  <Button
                  className="ShoppinAdButton"
                  variant='contained'
                  ><ShoppingCartCheckoutIcon/> SEPETE EKLE</Button>
                </Box>
              </Box>
              <Stack
                sx={{ borderBottom: "1px solid black", pb: 2, mb: 2 }}
                justifyContent={'space-between'}
              >
                <Typography>
                  <LocalShippingIcon  fontSize="large" />
                  Aynı Gün <br /> Ücretsiz Kargo
                </Typography>
                <Typography>
                  <VerifiedUserIcon  fontSize="large" />
                  750.000+ <br />
                  Mutlu Müşteri
                </Typography>
                <Typography>
                  <FactCheckIcon  fontSize="large" />
                  Memnuniyet <br />
                  Garantisi
                </Typography>
              </Stack>
    </div>
  )
}

export default depo