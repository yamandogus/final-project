import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import { ChangeEvent, useEffect, useState } from "react";
import { base_url } from "../../Bestseller/Bestseller";
import useSnackbar from "../../../hooks/alert";
import { AddedAddress, Address, CityProps, DistrictProps } from "../../../services/type";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import { deleteAddress } from "../../../services/addresDelete";
import { useLoaderData } from "react-router-dom";
import { userProfileLoaderReturn } from "../Informations/MyAccount";

const AddressForm: React.FC = () => {
  const {datas} = useLoaderData() as userProfileLoaderReturn
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districts, setDistricts] = useState<DistrictProps[]>([]);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [addresssNew, setAddresssNew] = useState<AddedAddress[]>(datas);
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const [editIndex, setEditIndex] = useState<string | null>(null);
  const [id, setİd] = useState("")

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
    setCities([]);
    setDistricts([]);
    setEditIndex(null);
  };


  useEffect(() => {
    async function fetchCity() {
      try {
        const responseCity = await fetch(
          base_url + "/world/region?limit=81&offset=0&country-name=turkey"
        );
        const dataCity = await responseCity.json();
        setCities(dataCity.data.results);
      } catch (error) {
        console.error("Şehirler yüklenirken hata oluştu:", error);
        showSnackbar("Şehirler yüklenirken hata oluştu", "error");
      }
    }
    fetchCity()
  }, []);

  useEffect(()=>{
    if(addresssNew.length===0){
      setIsAddressSaved(false)
    }else{
      setIsAddressSaved(true)
    }
  },[addresssNew.length])
  
  const handleAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const FormEl = e.target as HTMLFormElement;
    const formData = new FormData(FormEl);
    const data = Object.fromEntries(formData.entries()) as unknown as Address;
    const newData = {
      title: title,
      country_id: 226,
      region_id: cities.find((c) => c.name === city)?.id,
      subregion_id: districts.find((d) => d.name === district)?.id,
      full_address: `${address}${city}/${district}`,
      phone_number: data.phone,
    };
    try {
      const response = await fetch(
        base_url + "/users/addresses",
        {
          method:"POST",
          body: JSON.stringify(newData),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        }
      );
      const responseJson = await response.json();
      console.log(responseJson);
      showSnackbar("Adres Kaydedildi", "success");
      setAddresssNew(prev=>[...prev, responseJson.data])
      setFirstName(firstName)
      setLastName(lastName)
      resetForm();
      setIsAddressSaved(true);
    } catch (error) {
      console.log(error);
      showSnackbar("Adres Eklenemedi", "error");
    }
  };

  async function fetchDistrict(selectedCity: string) {
    try {
      const responseDistrict = await fetch(
        base_url + `/world/subregion?limit=30&offset=0&region-name=${selectedCity}`
      );
      const dataDistrict = await responseDistrict.json();
      setDistricts(dataDistrict.data.results);
    } catch (error) {
      console.error("İlçeler yüklenirken hata oluştu:", error);
      showSnackbar("İlçeler yüklenirken hata oluştu", "error");
    }
  }

  const upadeteAddress= async(id: string)=>{
    const updateData = {
      title: title,
      country_id: 226,
      region_id: cities.find((c) => c.name === city)?.id,
      subregion_id: districts.find((d) => d.name === district)?.id,
      full_address: `${address}, ${city.split("Province")[0]}/${district.split("İlçesi")[0]}`,
      phone_number: phone,
    }
    try {
      const response = await fetch(base_url + `/users/addresses/${id}`,{
        method:"PUT",
        body:JSON.stringify(updateData),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      console.log(responseJson)
      setIsAddressSaved(true)
      if(response.ok){
        setAddresssNew((prev)=>(
          prev.map((add)=>add.id === id ?{...add, ...updateData}:add)
        ))
      }
      showSnackbar("Adres güncellendi", "success")
      resetForm()
    } catch (error) {
      console.log(error);
      showSnackbar("Adres güncellenemedi","error")
    }
    
  }

  const handleDelete = async(id:string)=>{
    try {
      await deleteAddress(id, showSnackbar)
      setAddresssNew(prev=> prev.filter(fil=> fil.id !== id))
      resetForm()
    } catch (error) {
      console.log(error);   
    }
  }

  return (
    <Box mb={10}>
      {isAddressSaved ? (
        <Box>
          <Container>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}>
              <Typography variant="subtitle1">
                ADRESLERİM
                <span style={{margin:2,fontSize:15, padding:"1px 5px",fontWeight: "bolder", backgroundColor:'black', borderRadius:"50%", color:'white'}}>
                  {addresssNew.length}
                </span>
              </Typography>
              <Button 
                onClick={() => setIsAddressSaved(false)}
                sx={{ textTransform: 'none' }}
              >
                Adres Ekle
              </Button>
            </Box>
            <Grid container spacing={3}>
              {addresssNew.map((adres) => (
                <Grid item xs={6} md={6} key={adres.id}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid black",
                      display: "flex",
                      justifyContent:"space-between",
                      flexDirection: "column",
                      gap: 1,
                      height: "100%",
                    }}
                  >
                    <Typography component="div" fontWeight="bold">
                      {adres.title}
                    </Typography>
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
                        bottom:0,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Button
                        onClick={()=>handleDelete(adres.id)}
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
                          setEditIndex(adres.id);
                          setTitle(adres.title);
                          setAddress(adres.full_address.split(",")[0]);
                          setPhone(adres.phone_number);
                          setIsAddressSaved(false);
                          setİd(adres.id)
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
          </Container>
        </Box>
      ) : (
        <Box>
          <Box mb={2}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography fontWeight="bolder" variant="subtitle1">
                {editIndex ? "Adresi Düzenle" : "Adres Oluştur"}
              </Typography>
              <Button
                onClick={() => {
                  setIsAddressSaved(true);
                  resetForm();
                }}
                sx={{ textTransform: 'none' }}
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
          <form onSubmit={(e)=>{
            e.preventDefault()
            if(editIndex){
              upadeteAddress(id)
            }else{
              handleAddressSubmit(e)
            }
          }}>
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
                  {cities.map((option, index) => (
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
                  {districts.map((district, index) => (
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
              <Grid item xs={12} textAlign="end">
                <Button
                  type="submit"
                  variant="contained"
                  onClick={()=>{
                    if(editIndex){
                      upadeteAddress(id)
                    }
                  }}
                  sx={{
                    py: 1,
                    textTransform: "none",
                    backgroundColor: "black",
                    "&:hover": { backgroundColor: "black" },
                  }}
                >
                  {editIndex ? "Güncelle" : "Kaydet"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      )}
      <SnackbarComponent />
    </Box>
  );
};

export default AddressForm;