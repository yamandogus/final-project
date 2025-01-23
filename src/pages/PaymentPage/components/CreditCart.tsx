import { Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
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

  console.log(state.number);

  const handleInputChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (
    evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  useEffect(() => {
    console.log("Current state:", state);
  }, [state]);

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
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 16) {
                  setState((prev) => ({
                    ...prev,
                    number: value.replace(/(\d{4})/g, "$1 ").trim(),
                  }));
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
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 4) {
                  const month = value.slice(0, 2);
                  const year = value.slice(2);
                  setState((prev) => ({
                    ...prev,
                    expiry: value.length > 2 ? `${month}/${year}` : month,
                  }));
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
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 3) {
                  setState((prev) => ({
                    ...prev,
                    cvc: value,
                  }));
                }
              }}
              onFocus={handleInputFocus}
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditCart;
