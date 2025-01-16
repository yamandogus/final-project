import { Box, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CreditCart = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus as Focused}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="number"
              label="Kart Numarası"
              size="small"
              value={state.number}
              onChange={(e) => {
                const formattedValue = formatCardNumber(e.target.value);
                if (formattedValue.length <= 19) {
                  handleInputChange({
                    ...e,
                    target: { ...e.target, value: formattedValue },
                  });
                }
              }}
              onFocus={handleInputFocus}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="name"
              label="Kart Üzerindeki İsim"
              size="small"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="expiry"
              label="Son Kullanma Tarihi"
              size="small"
              value={state.expiry}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (value.length <= 4) {
                  const formattedValue = value
                    .replace(/(\d{2})/, '$1/')
                    .replace(/(\d{2})\/?(\d{2})/, '$1/$2');
                  handleInputChange({
                    ...e,
                    target: { ...e.target, value: formattedValue },
                  });
                }
              }}
              onFocus={handleInputFocus}
              placeholder="MM/YY"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="cvc"
              label="CVC"
              size="small"
              value={state.cvc}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (value.length <= 3) {
                  handleInputChange({
                    ...e,
                    target: { ...e.target, value },
                  });
                }
              }}
              onFocus={handleInputFocus}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Checkbox />
              <Typography variant="body2">
                Kart bilgilerimi sonraki alışverişlerim için kaydet
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditCart;