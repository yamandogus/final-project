import { Grid, Typography, Button, Card, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

interface ProductPropsHome {
  name: string;
  image?: string;
  description: string;
  review: string;
  link: string;
  bg: string;
}

const HomeComp = ({ name, image, review, link, bg }: ProductPropsHome) => {
  return (
    <Grid item xs={6} sm={4}>
      <Card className='cardTyp' sx={{backgroundColor:bg, height:165, borderRadius:3}}>
        <Grid container>
          <Grid item xs={6}>
              <img className='homeConmtImg' style={{height:164, width:294}} height={'auto'} src={image} alt="" />
          </Grid>
          <Grid item xs={6}>
            <Stack direction={'column'} spacing={2} sx={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontWeight: 900,
                  fontSize: 20,
                }}
                className='nameComp'
              >
                {name}
              </Typography>
              <Link to={link} style={{ textDecoration: 'none' }}>
                <Button
                  className='buttonComp'
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    borderRadius: 2,
                    width:"100%",
                    fontWeight: 700,
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 1)' }
                  }}
                  variant='contained'
                >
                  {review}
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default HomeComp;
