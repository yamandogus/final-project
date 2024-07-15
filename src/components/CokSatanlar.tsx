import { Box, Button, Container, Grid, Rating, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const CokSatanlar = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            mt: 1,
            mb: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h5"
        >
          ÇOK SATANLAR
        </Typography>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Link to="/Page2">
                <img src="/images/6card/pg1.jpeg" alt="" />
              </Link>
              <Typography sx={{ fontWeight: "bolder", mb: 2 }} className="text">
                WHEY PROTEIN
              </Typography>
              <p>EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ</p>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Typography>10869 Yorum</Typography>
              <Typography>
                <span style={{ fontWeight: 'bolder' }}>549 TL</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <img src="/images/6card/pg2.jpeg" alt="" />
              <Typography sx={{ fontWeight: "bolder", mb: 1 }} className="text">
                FITNESS PAKETİ
              </Typography>
              <p>EN POPÜLER ÜRÜNLER BİR ARADA</p>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Stack>
                  <Typography>7650 Yorum</Typography>
                  <Typography>
                    <span style={{ fontWeight: 'bolder' }}>799 TL</span>
                    <span>  </span>
                    <span
                      style={{
                        marginLeft: '10px',
                        color: 'red',
                        textDecorationLine: 'line-through',
                      }}
                    >
                      1126 TL
                    </span>
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <img src="/images/6card/pg3.jpeg" alt="" />
              <Typography sx={{ fontWeight: "bolder", mb: 1 }} className="text">
                GÜNLÜK VİTAMİN PAKETİ
              </Typography>
              <p>EN SIK TÜKETİLEN TAKVİYELER</p>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Box>
                  <Typography>5013 Yorum</Typography>
                  <Typography>
                    <span style={{ fontWeight: 'bolder' }}>549 TL</span>
                    <span>  </span>
                    <span
                      style={{
                        marginLeft: '10px',
                        color: 'red',
                        textDecorationLine: 'line-through',
                      }}
                    >
                      717 TL
                    </span>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <img src="/images/6card/pg4.jpeg" alt="" />
              <Typography sx={{ fontWeight: "bolder", mb: 1 }} className="text">
                PRE-WORKOUT SUPREME
              </Typography>
              <p>ANTRENMAN ÖNCESİ TAKVİYESİ</p>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Box>
                  <Typography>6738 Yorum</Typography>
                  <Typography>
                    <span style={{ fontWeight: 'bolder' }}>399 TL</span>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <img src="/images/6card/pg5.jpeg" alt="" />
              <Typography sx={{ fontWeight: "bolder", mb: 1 }} className="text">
                CREAM OF RICE
              </Typography>
              <p>
                EN LEZZETLİ PİRİNÇ <br /> KREMASI
              </p>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Box>
                  <Typography>5216 Yorum</Typography>
                  <Typography>
                    <span style={{ fontWeight: 'bolder' }}>239 TL</span>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <img src="/images/6card/pg6.jpeg" alt="" />
              <Typography sx={{ fontWeight: "bolder", mb: 1 }} className="text">
                CREATINE
              </Typography>
              <p>EN POPÜLER SPORCU TAKVİYESİ</p>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Box>
                  <Typography>8558 Yorum</Typography>
                  <Typography>
                    <span style={{ fontWeight: 'bolder' }}>239 TL</span>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <Button variant='contained' color='primary' sx={{ my: 4, px: 10, fontWeight: 'bolder' }}>TÜMÜNÜ GÖR</Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default CokSatanlar
