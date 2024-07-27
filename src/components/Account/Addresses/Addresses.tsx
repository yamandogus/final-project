import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material"
import MuiPhoneNumber from "material-ui-phone-number"
import { ChangeEvent, useState } from "react"


const Addresses:React.FC = () => {
    const [focusPhone, setFocusPhone] = useState(false)
    const [phone, setPhone] =  useState<string>("")
    const [phoneError, setPhoneError] = useState(false)
    const [isAddressSaved, setIsAddressSaved] = useState(false)

    const handlePhone = (value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        if(typeof value ==="string"){ console.log(value);
        
            setFocusPhone(true)
            setPhone(value)
            setPhoneError(false)
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleAddressSubmit = (e:any) =>{
        e.preventDefault();
        setIsAddressSaved(true)
    } 

  return (
    <>
        <Box>
            {!isAddressSaved ? (
                <Box mb={10}>
            <Box mb={5}>
                <Typography fontWeight='bolder' variant="subtitle1">Adres Oluştur</Typography>
                <Stack sx={{
                    backgroundColor:"rgba(33, 38, 171, 0.1)",
                    border:"1px solid rgba(33, 38, 171, 1)",
                    borderRadius:1,
                    px:3,
                    py:2
                }}>
                    <Typography variant="subtitle2">Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres oluşturunuz.</Typography>
                </Stack>
            </Box>
            <Grid container mb={2}>
               <Grid item xs={12} md={6} spacing={2}>
                <TextField
                fullWidth
                required
                label="Adres Başlığı"
                defaultValue={'ev, iş vb...'}
                />
                </Grid> 
             </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                        fullWidth
                        label="Ad"
                        required
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Soyad"
                            required
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Adres"
                            required
                            />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                        fullWidth
                        label="Şehir"
                        required
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="İlçe"
                            required
                            />
                    </Grid>
                    <Grid item xs={12}>
                    <MuiPhoneNumber 
                        key="autofocus_issue_112"
                        defaultCountry="tr"
                        fullWidth
                        variant="outlined"
                        label="Telefon Numarası"
                        name="phone"
                        value={phone}
                        onChange={handlePhone}
                        error={phoneError}
                        helperText={phoneError && "Invalid phone number"}
                        autoFocus={focusPhone}
                    />
                    </Grid>
                    <Grid item xs={12} textAlign={'end'}>
                        <Button
                        onClick={handleAddressSubmit}
                        variant='contained'
                        sx={{
                            py:1,
                            backgroundColor:'black',
                            '&:hover':{backgroundColor:'black'}
                        }}
                        >Kaydet</Button>
                    </Grid>
                </Grid>
        </Box>
            ):
            (
              <>
                <p>Adres eklendi</p>
                <a onClick={()=> setIsAddressSaved(false)} >Adres Ekle</a>
              </>
            )
            }
        </Box>
        
    </>
  )
}

export default Addresses