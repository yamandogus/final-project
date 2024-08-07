import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
const DetailsCmpOne = () => {
  const [classAdded, setClassAdded] = useState("");
  const [dimension, setDimension] = useState("");
  const [count, setCount] = useState<number>(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassAdded(event.target.value);
  };
  const handleChangeDimension = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDimension(event.target.value);
  };
  return (
    <>
      <Box width="100%">
        <Box>
          <Typography variant="h5" fontWeight={'bolder'}>WHEY PROTEIN</Typography>
          <Typography
            sx={{
              color: "rgba(99, 99, 99, 1)",
            }}
            variant="subtitle2"
          >
            EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ
          </Typography>
          <Stack direction="row" spacing={2}>
            <Rating defaultValue={5} readOnly size="small" />
            <span>10869 Yorum</span>
          </Stack>
          <Stack
            width="100%"
            mt={2}
            direction={"row"}
            spacing={2}
            className="choiceDiv"
          >
            <button className="choiceButton">VEJETARYEN</button>
            <button className="choiceButton">GLUTENSİZ</button>
          </Stack>
        </Box>
        <Box my={1}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <strong>AROMA:</strong>
            </FormLabel>
            <RadioGroup
              aria-labelledby="aroma"
              name="radio-buttons-group"
              onChange={handleChange}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <FormControlLabel
                    className={`checkedForm ${
                      classAdded === "Bisküvi" ? "checkedDiv" : ""
                    }`}
                    value="Bisküvi"
                    control={<Radio className="checked" />}
                    label={
                      <Box display="flex" alignItems="center">
                        Büskivi
                        <span
                          style={{ backgroundColor: "rgba(230, 188, 121, 1)" }}
                          className="labelSpan"
                        ></span>
                      </Box>
                    }
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    className={`checkedForm ${
                      classAdded === "Çikolata" ? "checkedDiv" : ""
                    }`}
                    value="Çikolata"
                    control={<Radio className="checked" />}
                    label={
                      <Box display="flex" alignItems="center">
                        Çikolata
                        <span
                          style={{ backgroundColor: "rgba(86, 50, 29, 1)" }}
                          className="labelSpan"
                        ></span>
                      </Box>
                    }
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    className={`checkedForm ${
                      classAdded === "Muz" ? "checkedDiv" : ""
                    }`}
                    value="Muz"
                    control={<Radio className="checked" />}
                    label={
                      <Box display="flex" alignItems="center">
                        Muz
                        <span
                          style={{ backgroundColor: "rgba(241, 208, 24, 1)" }}
                          className="labelSpan"
                        ></span>
                      </Box>
                    }
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    className={`checkedForm ${
                      classAdded === "Salted Caramel" ? "checkedDiv" : ""
                    }`}
                    value="Salted Caramel"
                    control={<Radio className="checked" />}
                    label={
                      <Box display="flex" alignItems="center">
                        Salted Caramel
                        <span
                          style={{ backgroundColor: "rgba(182, 67, 0, 1)" }}
                          className="labelSpan"
                        ></span>
                      </Box>
                    }
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    className={`checkedForm ${
                      classAdded === "Choco Nut" ? "checkedDiv" : ""
                    }`}
                    value="Choco Nut"
                    control={<Radio className="checked" />}
                    label={
                      <Box display="flex" alignItems="center">
                        Choco Nut
                        <span
                          style={{ backgroundColor: "rgba(123, 63, 0, 1)" }}
                          className="labelSpan"
                        ></span>
                      </Box>
                    }
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    className={`checkedForm ${
                      classAdded === "Hindistan Cevizi" ? "checkedDiv" : ""
                    }`}
                    value="Hindistan Cevizi"
                    control={<Radio className="checked" />}
                    label={
                      <Box display="flex" alignItems="center">
                        Hindistan Cevizi
                        <span
                          style={{ backgroundColor: "rgba(230, 188, 121, 1)" }}
                          className="labelSpan"
                        ></span>
                      </Box>
                    }
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    className={`checkedForm ${
                      classAdded === "Raspberry Cheesecake" ? "checkedDiv" : ""
                    }`}
                    value="Raspberry Cheesecake"
                    control={<Radio className="checked" />}
                    label={
                      <Box display="flex" alignItems="center">
                        Raspberry Cheesecake
                        <span
                          style={{ backgroundColor: "rgba(204, 30, 95, 1)" }}
                          className="labelSpan"
                        ></span>
                      </Box>
                    }
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    className={`checkedForm ${
                      classAdded === "Çilek" ? "checkedDiv" : ""
                    }`}
                    value="Çilek"
                    control={<Radio className="checked" />}
                    label={
                      <Box display="flex" alignItems="center">
                        Çilek
                        <span
                          style={{ backgroundColor: "rgba(204, 30, 95, 1)" }}
                          className="labelSpan"
                        ></span>
                      </Box>
                    }
                    labelPlacement="end"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
        <FormControl component={"fieldset"}>
            <FormLabel component={"legend"}><strong >BOYUT:</strong></FormLabel>
            <RadioGroup
              aria-labelledby="aroma"
              name="radio-buttons-group"
              onChange={handleChangeDimension}
            >
              <Grid container spacing={2}>
                <Grid item>
                    <FormControlLabel
                    className={`checkedForm ${dimension === "400g 16 servis" ? "checkedDiv" : ""}`}
                    value="400g 16 servis"
                    control={<Radio className="checked" />}
                    label={
                        <>
                        400g <br /> 16 servis
                        </>
                    }
                    />
                                      
                                        
                </Grid>
                <Grid item>
                <FormControlLabel
                    className={`checkedForm ${dimension === "1.6KG" ? "checkedDiv" : ""}`}
                    value="1.6KG"
                    control={<Radio className="checked" />}
                    label={
                        <>
                        1.6KG <br /> 64 servis
                        </>
                    }
                    />
                </Grid>
                <Grid item>
                <FormControlLabel
                    className={`checkedForm ${dimension === "1.6KG X 2 ADET" ? "checkedDiv" : ""}`}
                    value="1.6KG X 2 ADET"
                    control={<Radio className="checked" />}
                    label={
                        <>
                        1.6KG X 2 ADET <br /> 128 servis <span className="discount6span">%6 İNDİRİM</span>
                        </>
                    }
                    />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          <Box sx={{display:"flex", justifyContent:'space-between',my:2}}>
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
              <Box sx={{display:'flex', justifyContent:'space-between', my:1}}>
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
        </Box>
      </Box>
    </>
  );
};

export default DetailsCmpOne;
