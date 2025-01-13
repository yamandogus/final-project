import { Box,Checkbox, Grid, TextField, Typography } from "@mui/material";
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
      <form style={{display: "flex", justifyContent: "center"}}>
        <Grid container sx={{ mt: 2, width:"90%"}} spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              label="Kart Numarası"
              name="number"
              size="small"
              fullWidth
              value={state.number}
              onChange={(e) => {
                const value = formatCardNumber(e.target.value);
                if (value.length <= 19) {
                  setState((prev) => ({ ...prev, number: value }));
                }
              }}
              onFocus={handleInputFocus}
              slotProps={{
                input: {
                  maxRows: 19,
                },
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="name"
              size="small"
              label="İsim Soyisim"
              fullWidth
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="expiry"
              size="small"
              label="Son Kullanma Tarihi"
              value={state.expiry}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                  value = value.slice(0, 2) + '/' + value.slice(2);
                }
                if (value.length <= 5) {
                  const month = parseInt(value.slice(0, 2));
                  if (value.length <= 2 && month > 12) {
                    value = '12';
                  }
                  if (value.length <= 2 && month === 0) {
                    value = '01';
                  }
                  setState((prev) => ({ ...prev, expiry: value }));
                }
              }}
              onFocus={handleInputFocus}
              slotProps={{
                input: {
                  maxRows: 5,
                },
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="cvc"
              label="CVC"
              size="small"
              fullWidth
              value={state.cvc}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (value.length <= 3) {
                  setState((prev) => ({ ...prev, cvc: value }));
                }
              }}
              onFocus={handleInputFocus}
              slotProps={{
                input:{
                  inputMode: "numeric",
                  maxRows: 3,
                }
              }}
              required
            />
          </Grid>
        </Grid>
      </form>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle2">
          <Checkbox size="small" />
          Kartımı <img width={70} src="/images/master/master.png" alt="" />
          altyapısında kullanmak istiyorum.
        </Typography>   
      </Box>
    </Box>
  );
};

export default CreditCart;