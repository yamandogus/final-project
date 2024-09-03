import { Box, Container, Grid, Typography } from '@mui/material';
import ProductCard from './Products';
import { useLoaderData } from 'react-router-dom';

export const base_url = "https://fe1111.projects.academy.onlyjs.com/api/v1"
export const photo_url = "https://fe1111.projects.academy.onlyjs.com"

interface PriceInfo {
  profit?: null;
  total_price: number;
  discounted_price?: number | null;
  price_per_servings?: number;
  discount_percentage?: number | null;
}

export interface BestsellerPropsCS {
  name: string;
  short_explanation: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count?: number;
  average_star: number;
  slug?: string,
}

export async function loader() {
    const response = await fetch(base_url + "/products/best-sellers")
    const result = await response.json() 
    return { products: result.data} 
}


const CokSatanlar = () => {
  const {products} = useLoaderData() as {products : BestsellerPropsCS[] }
  
  return (
    <Box>
      <Typography
        sx={{
          my:3,
          textAlign:'center'
        }}
        variant="h5"
      >
        ÇOK SATANLAR
      </Typography>
      <Container>
        <Grid container  spacing={2}>
          {products.map((data, index)=>(
            <ProductCard
            key={index}
            name={data.name}
            photo_src={photo_url  +data.photo_src}
            short_explanation={data.short_explanation.toUpperCase()}
            average_star={data.average_star}
            comment_count={data.comment_count}
            price_info={data.price_info}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CokSatanlar;
