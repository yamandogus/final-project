import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { userProfileLoaderReturn } from "../Informations/MyAccount";
import UserAddedAddress from "./Component/Address";
import AddressesForm from "./Component/Form";
import { AddedAddress, Address, CityProps, DistrictProps } from "../../../../services/Type";
import useSnackbar from "../../../../hooks/Alert";
import { base_url } from "../../../../components/Bestseller/BestsellerPage";
import { deleteAddress } from "../../../../services/AddresDelete";

const AddressForm: React.FC = () => {
  const { datas, citysData } = useLoaderData() as userProfileLoaderReturn;
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cities, setCities] = useState<CityProps[]>(citysData);
  const [districts, setDistricts] = useState<DistrictProps[]>([]);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [addresssNew, setAddresssNew] = useState<AddedAddress[]>(datas);
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const [editIndex, setEditIndex] = useState<boolean>(false);
  const [id, setİd] = useState("");

  const handlePhone = (
    value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (typeof value === "string") {
      const cleanValue = value.replace(/\s+/g, "");
      setPhone(cleanValue);
    }
  };

  const resetForm = () => {
    setTitle("");
    setAddress("");
    setCity("");
    setDistrict("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setCities(citysData);
    setDistricts([]);
    setEditIndex(false);
  };

  useEffect(() => {
    if (addresssNew.length === 0) {
      setIsAddressSaved(false);
    } else {
      setIsAddressSaved(true);
    }
  }, [addresssNew.length]);

  const handleAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const FormEl = e.target as HTMLFormElement;
    const formData = new FormData(FormEl);
    const data = Object.fromEntries(formData.entries()) as unknown as Address
    const newData = {
      title: title,
      country_id: 226,
      first_name: firstName,
      last_name: lastName,
      region_id: cities.find((c) => c.name === city)?.id,
      subregion_id: districts.find((d) => d.name === district)?.id,
      full_address: `${address}, ${city.split("Province")[0]}/${
        district.split("İlçesi")[0]
      }`,
      phone_number: data.phone,
    };
    try {
      const response = await fetch(base_url + "/users/addresses", {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      if (response.ok) {
        showSnackbar("Adres Kaydedildi", "success");
        setAddresssNew((prev) => [...prev, responseJson.data]);
        setFirstName(firstName);
        setLastName(lastName);
        resetForm();
        setIsAddressSaved(true);
      } else if (phone === "+90 111 111 11 11") {
        showSnackbar("Geçersiz telefon numarası", "error");
      } else {
        showSnackbar("Geçersiz telefon numarası", "error");
      }
    } catch (error) {
      console.log(error);
      showSnackbar("Adres Eklenemedi", "error");
    }
  };

  async function fetchDistrict(selectedCity: string) {
    try {
      const responseDistrict = await fetch(
        base_url +
          `/world/subregion?limit=30&offset=0&region-name=${selectedCity}`
      );
      const dataDistrict = await responseDistrict.json();
      setDistricts(dataDistrict.data.results);
    } catch (error) {
      console.error("İlçeler yüklenirken hata oluştu:", error);
      showSnackbar("İlçeler yüklenirken hata oluştu", "error");
    }
  }

  const upadeteAddress = async (id: string) => {
    const updateData = {
      title: title,
      country_id: 226,
      first_name: firstName,
      last_name: lastName,
      region_id: cities.find((c) => c.name === city)?.id,
      subregion_id: districts.find((d) => d.name === district)?.id,
      full_address: `${address}, ${city.split("Province")[0]}/${
        district.split("İlçesi")[0]
      }`,
      phone_number: phone,
    };
    try {
      const response = await fetch(base_url + `/users/addresses/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateData),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      console.log(responseJson);
      setIsAddressSaved(true);
      if (response.ok) {
        setAddresssNew((prev) =>
          prev.map((add) => (add.id === id ? { ...add, ...updateData } : add))
        );
      }

      showSnackbar("Adres güncellendi", "success");
      resetForm();
    } catch (error) {
      console.log(error);
      showSnackbar("Adres güncellenemedi", "error");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAddress(id, showSnackbar);
      setAddresssNew((prev) => prev.filter((fil) => fil.id !== id));
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box mb={10}>
      {isAddressSaved ? (
        <Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="subtitle1">
                ADRESLERİM
                <span
                  style={{
                    margin: 2,
                    fontSize: 15,
                    padding: "1px 5px",
                    fontWeight: "bolder",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    color: "white",
                  }}
                >
                  {addresssNew.length}
                </span>
              </Typography>
              <Button
                variant='contained'
                onClick={() => setIsAddressSaved(false)}
                sx={{ textTransform: "none", backgroundColor: "black", color: "white" }}
              >
              ← Adres Ekle
              </Button>
            </Box>
            <UserAddedAddress
              addresssNew={addresssNew}
              setEditIndex={setEditIndex}
              handleDelete={handleDelete}
              setPhone={setPhone}
              setTitle={setTitle}
              setAddress={setAddress}
              setİd={setİd}
              setIsAddressSaved={setIsAddressSaved}
            />
          </Container>
        </Box>
      ) : (
        <Box>
          <Box mb={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontWeight="bolder" variant="subtitle1">
                {editIndex ? "Adresi Düzenle" : "Adres Oluştur"}
              </Typography>
              <Button
               variant="contained"
                onClick={() => {
                  setIsAddressSaved(true);
                  resetForm();
                }}
                sx={{ textTransform: "none", backgroundColor: "black", color: "white" }}
              >
                Adreslerim ➝
              </Button>
            </Box>
            {addresssNew.length === 0 && !editIndex && (
              <Stack
                sx={{
                  backgroundColor: "rgba(33, 38, 171, 0.1)",
                  border: "1px solid rgba(33, 38, 171, 1)",
                  borderRadius: 1,
                  px: 3,
                  py: 2,
                  mt: 1,
                }}
              >
                <Typography variant="subtitle2">
                  Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres
                  oluşturunuz.
                </Typography>
              </Stack>
            )}
          </Box>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (editIndex) {
                upadeteAddress(id);
              } else {
                handleAddressSubmit(e);
              }
            }}
          >
            <AddressesForm
              title={title}
              setTitle={setTitle}
              address={address}
              setAddress={setAddress}
              city={city}
              setCity={setCity}
              district={district}
              setDistrict={setDistrict}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              phone={phone}
              cities={cities}
              districts={districts}
              fetchDistrict={fetchDistrict}
              handlePhone={handlePhone}
              editIndex={editIndex}
              id={id}
              updateAddress={upadeteAddress}
            />
          </form>
        </Box>
      )}
      <SnackbarComponent />
    </Box>
  );
};

export default AddressForm;
