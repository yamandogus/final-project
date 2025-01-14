import { Box, FormControlLabel, Radio, Typography } from "@mui/material";

const extraSection = [
  {
    section: "Kapıda Ödeme (Nakit)",
    price: 39,
  },
  {
    section: "Kapıda Ödeme (Kredi Kartı)",
    price: 45,
  },
];
const PaymentExtra = () => {
  return (
    <>
      {extraSection.map((extra, index) => (
        <Box
        key={extra.price}
          sx={{
            borderRadius: 3,
            width: "100%",
            border: "1px solid black",
            mb: 1,
          }}
        >
          <FormControlLabel
            key={index}
            control={<Radio />}
            value={extra.section}
            label={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  gap: { xs: 2, sm: 4, md: 10 },
                  "& > *": { flexShrink: 0 },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "left",
                    minWidth: "fit-content",
                  }}
                >
                  {extra.section}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                    color: "text.secondary",
                  }}
                >
                  {extra.price} TL işlem bedeli
                </Typography>
              </Box>
            }
            sx={{
              width: "90%",
              boder: "1px solid red",
              margin: 0,
              "& .MuiFormControlLabel-label": {
                width: "100%",
              },
            }}
          />
        </Box>
      ))}
    </>
  );
};

export default PaymentExtra;
