import { Box, Container,Grid,Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { BestsellerPropsCS, LinksProps } from '../../services/type';
import ProductCard from './Products';

export const base_url = "https://fe1111.projects.academy.onlyjs.com/api/v1"
export const photo_url = "https://fe1111.projects.academy.onlyjs.com"


export async function loader() {
  const bestSellersResponse = await fetch(base_url + "/products/best-sellers");
  const bestSellersData = await bestSellersResponse.json();
  
  const categoriesResponse = await fetch(base_url + "/categories");
  const categoriesData = await categoriesResponse.json();

  return { products: bestSellersData.data, category: categoriesData.data.data };
}


const BestSeller = () => {
  const {products} = useLoaderData() as {products : BestsellerPropsCS[], category:LinksProps[]}
  
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
            slug={data.slug}
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

export default BestSeller;
