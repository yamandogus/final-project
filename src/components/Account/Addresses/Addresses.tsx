import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material"


const Addresses = () => {
  return (
    <>
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
                        <TextField
                            fullWidth
                            label="Telefon"
                            required
                            placeholder="+90 (555) 555-5555"
                            inputProps={{
                            pattern: "\\+\\d{1,3} \\(\\d{3}\\) \\d{3}-\\d{4}", 
                            title: "Telefon numarası formatı: +90 (555) 555-5555"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign={'end'}>
                        <Button
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
    </>
  )
}

export default Addresses