import {
  Box,
  Button,
  Container,
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
import Accordions from "../Accordions/Accordions";
import { WheyIsolate } from "../../pages/ProductDetails";
import { photo_url } from "../Bestseller/CokSatanlar";

const aromaOptions = [
  { value: "Bisküvi", label: "Büskivi", color: "rgba(230, 188, 121, 1)" },
  { value: "Çikolata", label: "Çikolata", color: "rgba(86, 50, 29, 1)" },
  { value: "Muz", label: "Muz", color: "rgba(241, 208, 24, 1)" },
  {
    value: "Salted Caramel",
    label: "Salted Caramel",
    color: "rgba(182, 67, 0, 1)",
  },
  { value: "Choco Nut", label: "Choco Nut", color: "rgba(123, 63, 0, 1)" },
  {
    value: "Hindistan Cevizi",
    label: "Hindistan Cevizi",
    color: "rgba(230, 188, 121, 1)",
  },
  {
    value: "Raspberry Cheesecake",
    label: "Raspberry Cheesecake",
    color: "rgba(204, 30, 95, 1)",
  },
  { value: "Çilek", label: "Çilek", color: "rgba(204, 30, 95, 1)" },
];

const dimensions = [
  {
    value: "400g 16 servis",
    label: (
      <>
        400g <br />
        16 servis
      </>
    ),
  },
  {
    value: "1.6KG",
    label: (
      <>
        1.6KG <br />
        64 servis
      </>
    ),
  },
  {
    value: "1.6KG X 2 ADET",
    label: (
      <>
        1.6KG X 2 ADET
        <br />
        128 servis <span className="discount6span">%6 İNDİRİM</span>
      </>
    ),
  },
];

const DetailsCmpOne = (props: WheyIsolate) => {
  const {
    name,
    id,
    short_explanation,
    average_star,
    comment_count= 0,
    explanation = {},
    variants = [],
    tags = [],
  } = props;
  const [selectedAroma, setSelectedAroma] = useState<string>("");
  const [dimension, setDimension] = useState("");
  const [count, setCount] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAroma(event.target.value);
  };
  const handleChangeDimension = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDimension(event.target.value);
  };

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6} key={id}>
              <img
                width={"90%"}
                className="pageTwoImg"
                src={photo_url + variants[0].photo_src}
                alt=""
              />
              <Box component={"div"} className="mobileAccordion">
                <Accordions title={"ÖZELLİKLER"} details={explanation?.usage || " "} />
                <Accordions
                  title={"BESİN İÇERİĞİ"}
                  details={explanation?.features || " "}
                />
                <Accordions
                  title={"KULLANIM KOŞULLARI"}
                  details={explanation?.description || " "}
                />
              </Box>
            </Grid>
            <Grid item container sm={12} md={6}>
              <Box width="100%">
                <Box>
                  <Typography variant="h5" fontWeight={"bolder"}>
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(99, 99, 99, 1)",
                    }}
                    variant="subtitle2"
                  >
                    {short_explanation}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Rating defaultValue={average_star} readOnly size="small" />
                    <span>{comment_count} Yorum</span>
                  </Stack>
                  <Stack
                    width="100%"
                    mt={2}
                    direction={"row"}
                    spacing={2}
                    className="choiceDiv"
                  >
                    {tags &&
                      tags.map((tg, index) => (
                        <button key={index} className="choiceButton">
                          {tg}
                        </button>
                      ))}
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
                        {aromaOptions.map((option) => (
                          <Grid item key={option.value}>
                            <FormControlLabel
                              className={`checkedForm ${
                                selectedAroma === option.value
                                  ? "checkedDiv"
                                  : ""
                              }`}
                              value={option.value}
                              control={<Radio className="checked" />}
                              label={
                                <Box display="flex" alignItems="center">
                                  {option.label}
                                  <span
                                    style={{
                                      backgroundColor: option.color,
                                    }}
                                    className="labelSpan"
                                  ></span>
                                </Box>
                              }
                              labelPlacement="end"
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl component={"fieldset"}>
                    <FormLabel component={"legend"}>
                      <strong>BOYUT:</strong>
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="aroma"
                      name="radio-buttons-group"
                      onChange={handleChangeDimension}
                    >
                      <Grid container spacing={2}>
                        {dimensions.map((dim) => (
                          <Grid item key={dim.value}>
                            <FormControlLabel
                              className={`checkedForm ${
                                dimension === dim.value ? "checkedDiv" : ""
                              }`}
                              value={dim.value}
                              control={<Radio className="checked" />}
                              label={dim.label}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Box>
                      <span style={{ fontSize: 30, fontWeight: "bolder" }}>
                        {""}TL
                      </span>
                    </Box>
                    <Box>
                      <span>34.31 TL /Servis</span>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 1,
                    }}
                  >
                    <Box component={"div"} className="countDiv">
                      <button
                        className="countButton"
                        onClick={() => setCount(count ? count - 1 : 0)}
                      >
                        -
                      </button>
                      <span className="countCart">{count}</span>
                      <button
                        className="countButton"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </Box>
                    <Box>
                      <Button className="ShoppinAdButton" variant="contained">
                        <ShoppingCartCheckoutIcon /> SEPETE EKLE
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Stack sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontSize={11}>
                  Son Kullanma Tarihi: 07.2025
                </Typography>
                <Box component={"div"} className="lgAccordion">
                  <Accordions title={"KULLANIM ŞEKLİ"} details={explanation?.usage || " "} />
                  <Accordions
                    title={"BESİN İÇERİĞİ"}
                    details={explanation?.features || " "}
                  />
                  <Accordions
                    title={"AÇIKLAMA"}
                    details={explanation?.description || " "}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DetailsCmpOne;
