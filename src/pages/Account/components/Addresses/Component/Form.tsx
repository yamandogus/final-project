import { Grid, TextField, MenuItem, Button } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { ChangeEvent } from "react";
import { CityProps, DistrictProps } from "../../../../../services/Type";

interface AddressesFormProps { 
    title: string;
    setTitle: (e: string) => void;
    firstName: string;
    setFirstName: (e: string) => void;
    lastName: string;
    setLastName: (e: string) => void;
    address: string;
    setAddress: (e: string) => void;
    city: string;
    setCity: (e: string) => void;
    district: string;
    setDistrict: (e: string) => void;
    phone: string;
    cities:CityProps[];
    districts: DistrictProps[];
    fetchDistrict: (e: string) => void;
    handlePhone: (e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    editIndex: boolean;
    id: string;
    updateAddress: (e: string) => void;
}

const AddressesForm: React.FC<AddressesFormProps> = ({
    title,
    setTitle,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    city,
    setCity,
    district,
    setDistrict,
    phone,
    cities,
    districts,
    fetchDistrict,
    handlePhone,
    editIndex,
    id,
    updateAddress
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} mb={2}>
          <TextField
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            label="Adres Başlığı"
            placeholder="ev, iş vb..."
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="Ad"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Soyad"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            label="Adres"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            value={city}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  style: {
                    maxHeight: 140,
                  },
                },
                disableScrollLock: true,
              },
            }}
            onChange={(e) => {
              setCity(e.target.value);
              fetchDistrict(e.target.value);
            }}
            required
            label="İl"
          >
            {cities?.map((option, index) => (
              <MenuItem key={index} value={option.name}>
                {option.name.split(" ")[0]}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            value={district}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  style: {
                    maxHeight: 140,
                  },
                },
                disableScrollLock: true,
              },
            }}
            onChange={(e) => setDistrict(e.target.value)}
            required
            label="İlçe"
          >
            {districts?.map((district, index) => (
              <MenuItem key={index} value={district.name}>
                {district.name.split(" ")[0]}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <MuiPhoneNumber
            defaultCountry="tr"
            fullWidth
            variant="outlined"
            label="Telefon Numarası"
            name="phone"
            value={phone}
            onChange={handlePhone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            label="Fatura ve sipariş detayı için mail adresi giriniz."
            required
          />
        </Grid>
        <Grid item xs={12} textAlign="end">
          <Button
            type="submit"
            variant="contained"
            onClick={() => {
              if (editIndex) {
                updateAddress(id);
              }
            }}
            sx={{
              py: 1,
              textTransform: "none",
              backgroundColor: "black",
              px: 4,
              "&:hover": { backgroundColor: "black" },
            }}
          >
            {editIndex ? "Güncelle" : "Kaydet"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddressesForm;
