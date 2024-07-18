import { Grid, Typography, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';

interface ProductPropsHome {
  name: string;
  image: string;
  description: string;
  review: string;
  link: string;
}

const HomeComp = ({ name, image,review, link }: ProductPropsHome) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', position: 'relative', }}>
        <img src={image} alt={name} style={{ width: '100%', height: 200, objectFit: 'cover', display:'flex' }} />
        <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight: 'bold', color: 'black',  }}>
          {name}
        </Typography>
        <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 ,backgroundColor:'black', borderRadius:2  }}>
          <Link to={link} style={{ textDecoration: 'none', color: 'white', fontWeight:'bolder' }}>
            {review}
          </Link>
        </Button>
      </Card>
    </Grid>
  );
};

export default HomeComp;
