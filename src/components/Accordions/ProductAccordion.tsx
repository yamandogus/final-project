import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Stack,
    Typography,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Product } from "../../hooks/types";

interface Props {
    product: Product;
  }

const ProductAccordion = ({product}:Props) => {
  return (
    <>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontWeight: "bolder" }}
        >
          ÖZELLİKLER
        </AccordionSummary>
        <AccordionDetails>
          {product.explanation.features || " "}
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ fontWeight: "bolder" }}
        >
          BESİN İÇERİĞİ
        </AccordionSummary>

        <AccordionDetails>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
            }}
          >
            <Typography sx={{ fontWeight: "bolder", fontSize: 18 }}>
              BESİN DEĞERİ
            </Typography>
            <Typography
              sx={{
                fontWeight: "bolder",
                ml: "auto",
                textAlign: "right",
                fontSize: 18,
              }}
            >
              25 g servis için
            </Typography>
          </Stack>
          <Stack>
            {product.explanation.nutritional_content.nutrition_facts.ingredients.map(
              (ing, index) => (
                <Stack
                  key={index}
                  direction={"row"}
                  sx={{
                    borderBottom: "1px solid #dbdbdb",
                    justifyContent: "space-between",
                    py: 1,
                  }}
                >
                  <Typography>{ing.name}</Typography>
                  <Typography sx={{ textAlign: "right" }}>
                    {ing.amounts}
                  </Typography>
                </Stack>
              )
            )}
          </Stack>

          <Box sx={{ my: 2 }}>
            <Typography variant="subtitle1" fontWeight="bolder" fontSize={18}>
              İÇİNDEKİLER
            </Typography>
            {product.explanation.nutritional_content.ingredients ? (
              <>
                {product.explanation.nutritional_content.ingredients.map(
                  (extra, index) => (
                    <Typography key={index} variant="subtitle1" fontSize={15}>
                      <strong>{extra.aroma + ": "}</strong>
                      {extra.value}
                    </Typography>
                  )
                )}
              </>
            ) : (
              ""
            )}
          </Box>

          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "bolder", fontSize: 18 }}>
              AMİNO ASİT DEĞERLERİ
            </Typography>
            <Typography
              sx={{
                fontWeight: "bolder",
                textAlign: "right",
                fontSize: 18,
              }}
            >
              100 g
            </Typography>
          </Stack>

          <Stack>
            {product.explanation.nutritional_content.amino_acid_facts?.ingredients.map(
              (ing, index) => (
                <Stack
                  key={index}
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    borderBottom: "1px solid #dbdbdb",
                    py: 1,
                  }}
                >
                  <Typography>{ing.name}</Typography>
                  <Typography sx={{ textAlign: "right" }}>
                    {ing.amounts}
                  </Typography>
                </Stack>
              )
            )}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ fontWeight: "bolder" }}
        >
          KULLANIM ŞEKLİ
        </AccordionSummary>

        {product.explanation.usage.split("\n").map((usag, index) => (
          <AccordionDetails sx={{ px: 2, py: 0.6 }} key={index}>
            {usag.includes("Önemli Not") ? (
              <>
                {usag.split("Önemli Not")[0]}
                <strong>Önemli Not</strong>
                {usag.split("Önemli Not")[1]}
              </>
            ) : (
              usag
            )}
          </AccordionDetails>
        ))}
      </Accordion>
    </>
  );
};

export default ProductAccordion;
