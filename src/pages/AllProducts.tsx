import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Link, useLoaderData } from 'react-router-dom';
import { base_url } from '../components/Bestseller/CokSatanlar';
import Protein from '../components/Protein/Protein';


const photo_url = "https://fe1111.projects.academy.onlyjs.com"
interface PriceInfo {
  profit?: null;
  total_price: number;
  discounted_price?: number | null;
  price_per_servings?: number;
  discount_percentage?: number | null;
}

interface BestsellerProps {
  name: string;
  short_explanation: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count?: number;
  average_star: number;
}

function getAllProducts(page:number, limit:number){
  return (page - 1) * limit
}

export async function AllProLoader(page = 1) {
  const limit = 12;
  const offset = getAllProducts(page ,limit)
  const response = await fetch(base_url + `/products?limit=${limit}&offset=${offset}`)
  const dataAll = await response.json()
  return {products: dataAll.data.results}
}

const AllProducts = () => {
  const {products} = useLoaderData() as {products:BestsellerProps[]}

  return (
    <>
    <Box sx={{ my: 5 }}>
      <Container>
        <Typography fontSize={30} mb={2} fontWeight={'bolder'} style={{alignItems:'center'}}>TÜM ÜRÜNLER</Typography>
        <Grid container spacing={2}>
          {products.map((product, index)=>(
            <Protein
            key={index}
            name={product.name}
            photo_src={photo_url+product.photo_src}
            short_explanation={product.short_explanation.toUpperCase()}
            average_star={product.average_star}
            comment_count={product.comment_count}
            price_info={product.price_info}
            />
          ))}
        </Grid>
        <Grid item xs={12} spacing={4} mt={3}>
           <Stack spacing={3}>
           <Typography>Toplam 12 ürün görüntüleniyor</Typography>
            <Typography variant='subtitle2'>Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir. <strong>Protein</strong> kısaca, bir veya daha fazla amino asit artık</Typography>
            <Typography variant='caption'>
              <Link style={{color:'green'}} to={'#'}>Daha fazla göster</Link>
            </Typography>
           </Stack>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default AllProducts