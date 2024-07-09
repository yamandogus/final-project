import { Box, Card, Container, Grid, Typography } from "@mui/material";

const Page1 = () => {
  return (
    <>
      <Box>
        <img src="/img/pageImg1.jpeg" alt="" />
      </Box>
      <Box>
      <Container sx={{ boxShadow: 'none', border: 'none', p: 2, pt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{my:2}}>
          <Grid item xs={12} sm={4}>
            <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={4}>
            <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Card sx={{
              backgroundImage: 'url(/img/urun1.jpeg)', 
             backgroundSize: 'cover', 
                backgroundPosition: 'center', height: 200}}>
            <Typography>xs=12 sm=4</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      </Box>
      <Box>
        <Typography
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h5"
        >
          ÇOK SATANLAR
        </Typography>
      </Box>
    </>
  );
};

export default Page1;
