import { Grid, Rating, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface ProductProps {
    name: string;
    image: string;
    description: string;
    rating: number;
    reviews: number;
    price: number;
    discountedPrice?: number | null;
}

const ProductCard = ({name, image, description, rating, reviews, price, discountedPrice}: ProductProps) => {
  return (
    <>
        <Grid item xs={6} md={3} lg={2}>
            <Link to={`/products/${name}`}>
            <img className="responsive-image" src={image} alt={name} style={{ maxWidth: '100%', display: 'block', margin: 'auto' }} />
            </Link>
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
            <Typography fontSize={16} fontWeight={'bolder'} className="text">
                {name}
              </Typography>
              <Typography><span className='centered-span'>{description}</span></Typography>
              <Rating name="half-rating" defaultValue={rating}  readOnly />
              <Typography>{reviews} Yorum</Typography>
              <Typography>
                <span style={{ fontWeight: 'bolder' }}>{price} TL</span>
                {discountedPrice && <span className='spanText'>
                    {discountedPrice} TL
                  </span> }
              </Typography>
            </Stack>
        </Grid>

    </>
  )
}

export default ProductCard