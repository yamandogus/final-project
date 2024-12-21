import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import {AddedAddress} from "../../../../services/type";

interface AddedAddressProps {
    addresssNew: AddedAddress[];
    handleDelete: (id: string) => void;
    setEditIndex: (id: boolean) => void;
    setTitle: (e: string) => void;
    setAddress: (e: string) => void;
    setPhone: (e: string) => void;
    setIsAddressSaved: (e: boolean) => void;
    setİd: (e: string) => void;
}

const UserAddedAddress = ({
  addresssNew,
  handleDelete,
  setEditIndex,
  setTitle,
  setAddress,
  setPhone,
  setIsAddressSaved,
  setİd
}: AddedAddressProps) => {
  return (
    <Grid container spacing={3}>
      {addresssNew?.map((adres) => (
        <Grid item xs={12} sm={6} key={adres.id}>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              gap: 1,
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography component="div" fontWeight="bold">
                {adres.title}
              </Typography>
              <Typography component="div" fontWeight="bold">
                {adres.first_name + " " + adres.last_name}
              </Typography>
            </Box>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 1,
              }}
            >
              <HomeIcon /> {adres.full_address}
            </Typography>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 1,
              }}
            >
              <PhoneAndroidIcon /> {adres.phone_number}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                bottom: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Button
                onClick={() => handleDelete(adres.id)}
                variant="text"
                sx={{
                  textTransform: "none",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                <DeleteIcon />
                Sil
              </Button>
              <Button
                onClick={() => {
                  setEditIndex(true);
                  setTitle(adres.title);
                  setAddress(adres.full_address.split(",")[0]);
                  setPhone(adres.phone_number);
                  setIsAddressSaved(false);
                  setİd(adres.id);
                }}
                sx={{ textTransform: "none" }}
              >
                Adresi Düzenle
              </Button>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserAddedAddress;
