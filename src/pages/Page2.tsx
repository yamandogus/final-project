import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Container, FormControlLabel, Grid, Rating, Slider, Stack, Typography } from '@mui/material'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import CokSatanlar from '../components/CokSatanlar';
import Yorumlar from '../components/Yorumlar';


function Page2() {
  return (
    <>
<Box sx={{ mt: 5 }}>
  <Container>
    <Grid container spacing={3}>
      <Grid item sm={12} md={6}>
        <img
          className="pageTwoImg"
          src="/images/page2/c93a810b179e49b1b092f231efc186ee.jpeg"
          alt=""
        />
      </Grid>
      <Grid 
        item 
        sm={12} 
        md={6} 
        container 
        direction="column" 
        alignItems="flex-start" 
      >
        <Typography variant="h3">
          WHEY PROTEIN
        </Typography>
        <Typography>
          EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ
        </Typography>
        <Rating
          size="small"
          name="half-rating"
          defaultValue={5}
          precision={0.5}
        />
        <Stack direction="row" spacing={2} sx={{my:2}}>
          <Button variant='outlined'>VEJETERYAN</Button>
          <Button variant='outlined'>GLUTENSİZ</Button>
        </Stack>
        <Typography sx={{fontWeight:'bolder', my:1}}>AROMA:</Typography>
       <Stack direction={'row'} spacing={3}>
        <FormControlLabel
          control={<Checkbox color='secondary' sx={{}}/>}
          label="Bisküvi"
          labelPlacement="start"
          sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
        />
        <FormControlLabel
          control={<Checkbox color='secondary'/>}
          label="Çikolata"
          labelPlacement="start"
          sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
          
        />
        <FormControlLabel
          control={<Checkbox color='secondary' />}
          label="Muz"
          labelPlacement="start"
          sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
        />
      </Stack>

      <Stack direction={'row'} spacing={3} sx={{ my: 2 }}>
        <FormControlLabel
          control={<Checkbox color='secondary' />}
          label="Salted Caramel"
          labelPlacement="start"
          sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
        />
        <FormControlLabel
          control={<Checkbox color='secondary' />}
          label="Choco Nut"
          labelPlacement="start"
          sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
        />
        <FormControlLabel
          control={<Checkbox color='secondary' />}
          label="Hindistan Cevizi"
          labelPlacement="start"
          sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
        />
      </Stack>

      <Stack direction={'row'} spacing={3}>
        <FormControlLabel
          control={<Checkbox color='secondary' />}
          label="Raspberry Cheesecake"
          labelPlacement="start"
          sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
        />
        <FormControlLabel       
          control={<Checkbox color='secondary' />}
          label="Çilek"
          labelPlacement="start"
          sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
        />
      </Stack>
      <Typography sx={{fontWeight:'bolder',my:1}}>BOYUT :</Typography>
      <Stack spacing={3} direction={'row'}>
        <Typography sx={{ border: "1px solid black", py:2,px:5, borderRadius: "4px", textAlign:"center" }}>400G <br /> 16 servis</Typography>
        <Typography sx={{ border: "1px solid black", py:2,px:5, borderRadius: "4px" }}>1.6 KG <br /> 64 servis</Typography>
        <Typography sx={{ border: "1px solid black", py:2,px:5,  borderRadius: "4px" }}>1.6KG X 2 ADET <br /> 128 servis</Typography>
      </Stack>
      <Stack direction={'row'} spacing={40} sx={{my:2}}>
      <span style={{fontWeight:'bolder', fontSize:"30px"}}>549 TL</span>
      <Typography>
        34.31 TL /Servis
      </Typography>
      </Stack>
      <Stack 
      sx={{my:3}} direction={'row'} spacing={30}>
       <Box sx={{border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <button style={{height:"100%", width:"20px", border:"none"}}>-</button>
        <span style={{margin: "0 10px",fontSize:"20px"}}>1</span>
        <button style={{height:"100%", width:"20px",border:"none"}}>+</button>
        </Box> 
        <Button sx={{px:8}} variant='contained' color='warning' startIcon={<ShoppingCartCheckoutIcon/>}>SEPETE EKLE</Button>
      </Stack>
      <Stack sx={{borderBottom:"1px solid black", pb:2, mb:2}} direction={'row'} spacing={10}>
        <Typography> <LocalShippingIcon 
          sx={{mr:1}}
          fontSize='large'
        />Aynı Gün <br /> Ücretsiz Kargo</Typography>
        <Typography>
          <VerifiedUserIcon
          sx={{mr:1}}
          fontSize='large'
          />
          750.000+ <br />Mutlu Müşteri</Typography>
        <Typography>
          <FactCheckIcon
          sx={{mr:1}}
          fontSize='large'
          />
          Memnuniyet <br />Garantisi</Typography>
      </Stack>
      <Stack sx={{mb:3}}>
        <Typography>Son Kullanma Tarihi: 07.2025</Typography>
        <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight:"bolder"}}>ÖZELLİKLER</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight:"bolder"}}>BESİN İÇERİKLERİ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight:"bolder"}}>KULLANIM ŞEKLİ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
      </Grid>
    </Grid>
  </Container>
</Box>
<Box sx={{my:6}}>
        <Typography
          sx={{
            mt: 1,
            mb:2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h5"
        >
          SON GÖRÜNTÜLENEN ÜRÜNLER
        </Typography>
        <Container>
  <Grid container>
    <Grid item xs={12} sm={2}>
      <Link to="/Page2">
      <img className='imgSpan' src="/images/6card/pg1.jpeg" alt="" />
      </Link>
      <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>WHEY PROTEIN</Typography>
              <Typography><span className="centered-span">EN ÇOK TERCİH EDİLEN <br /> PROTEİN TAKVİYESİ</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>10869 Yorum</Typography>
              <Typography fontSize={25}><span>549 TL</span></Typography>
            </Stack>

    </Grid>
    <Grid item xs={12} sm={2}>
      <img className='imgSpan' src="/images/6card/pg2.jpeg" alt="" />
      <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>FITNESS PAKETİ</Typography>
              <Typography><span className="centered-span">EN POPÜLER ÜRÜNLER <br /> BİR ARADA</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>7650 Yorum</Typography>
              <Typography fontSize={25}><span>799 TL</span><span className='spanText'>1126 TL</span> </Typography>
            </Stack>
    </Grid>
    <Grid item xs={12} sm={2}>
      <img className='imgSpan' src="/images/6card/pg3.jpeg" alt="" />
      <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>GÜNLÜK VİTAMİN <br /> PAKETİ</Typography>
              <Typography><span className="centered-span">EN SIK TÜKETİLEN <br /> TAKVİYELER</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>5013 Yorum</Typography>
              <Typography fontSize={25}><span>549 TL</span><span className='spanText'>717 TL</span> </Typography>
            </Stack>
    </Grid>
    <Grid item xs={12} sm={2}>
      <img className='imgSpan' src="/images/6card/pg4.jpeg" alt="" />
      <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>PRE-WORKOUT <br /> SUPREME</Typography>
              <Typography><span className="centered-span">ANTRENMAN ÖNCESİ <br /> TAKVİYESİ</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>6738 Yorum</Typography>
              <Typography fontSize={25}><span>399 TL</span><span className='spanText'>1126 TL</span> </Typography>
            </Stack>
    </Grid>
    <Grid item xs={12} sm={2}>
      <img className='imgSpan' src="/images/6card/pg5.jpeg" alt="" />
      <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>CREAM OF RICE</Typography>
              <Typography><span className="centered-span">EN LEZZETLİ PİRİNÇ KREMASI</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>5216 Yorum</Typography>
              <Typography fontSize={25}><span>239 TL</span> </Typography>
            </Stack>
    </Grid>
    <Grid item xs={12} sm={2}>
      <img className='imgSpan' src="/images/6card/pg6.jpeg" alt="" />
      <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>CREATINE</Typography>
              <Typography><span className="centered-span">EN POPÜLER SPORCU <br /> TAKVİYESİ</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>8558 Yorum</Typography>
              <Typography fontSize={25}><span>239 TL</span></Typography>
            </Stack>
    </Grid>
  </Grid>
</Container>
      </Box>
      <Box>
      <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <Stack direction={'column'} >
            <Typography sx={{ fontSize: 25, fontWeight: 'bolder' }}>4.8</Typography>
            <Rating sx={{ my: 1 }} name="half-rating" defaultValue={5} precision={0.5} />
            <Typography>10869 YORUM</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction={"column"} spacing={2}>
            {[
              { value: 5, count: 9284, sliderValue: 90 },
              { value: 4, count: 1316, sliderValue: 50 },
              { value: 3, count: 226, sliderValue: 30 },
              { value: 2, count: 32, sliderValue: 10 },
              { value: 1, count: 11, sliderValue: 5 }
            ].map((rating, index) => (
              <Stack key={index} direction={'row'} spacing={2} alignItems="center" sx={{ width: '100%' }}>
                <Rating defaultValue={rating.value} readOnly icon={<StarIcon />} emptyIcon={<span />} />
                <Slider
                  defaultValue={rating.sliderValue}
                  aria-label='default'
                  disabled
                  sx={{
                    height: '10px',
                    flex: 1,
                    '& .MuiSlider-thumb': {
                      display: 'none',
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: 'blue',
                    }
                  }}
                />
                <Typography>({rating.count})</Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
      </Box>
      <Yorumlar/>
      <CokSatanlar/>
    </>
  )
}

export default Page2