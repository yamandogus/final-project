import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Link, useLoaderData } from 'react-router-dom';
import { base_url, photo_url } from '../components/Bestseller/Bestseller';
import { useEffect, useState } from 'react';
import Protein from '../components/Protein/Protein';

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
  slug: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count?: number;
  average_star: number;
}

export function getAllProducts(page:number, limit:number){
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
  const [product, setProduct] = useState(products)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 12;

  useEffect(()=>{
    const MoreProcut = async () =>{
      if(loading){
        const offset = getAllProducts(currentPage, itemsPerPage)
        const response = await fetch(base_url + `/products?limit=${itemsPerPage}&offset=${offset}`)
        const data = await response.json()
        setProduct((newProduct)=> [...newProduct, ...data.data.results])
        setLoading(false)
      }
    };
    if(currentPage > 1) {
      MoreProcut()
    }
  }, [currentPage, loading])

  const handleScroll = () =>{
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeihght = document.documentElement.scrollHeight;
    if(scrollY + windowHeight >= documentHeihght - 100 && !loading) {
      setLoading(true)
      setCurrentPage(currentPage + 1)
    }
  }


  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () =>{
      window.removeEventListener('scroll', handleScroll)
    };
  },[loading])



  return (
    <>
    <Box sx={{ my: 5 }}>
      <Container>
        <Typography fontSize={30} mb={2} fontWeight={'bolder'} style={{alignItems:'center'}}>TÜM ÜRÜNLER</Typography>
        <Grid container spacing={2}>
          {product.map((product, index)=>(
            <Protein
            key={index}
            name={product.name}
            photo_src={photo_url+product.photo_src}
            short_explanation={product.short_explanation.toUpperCase()}
            average_star={product.average_star}
            comment_count={product.comment_count}
            price_info={product.price_info}
            slug={product.slug}
            />
          ))}
        </Grid>
        <Grid item xs={12} gap={4} mt={3}>
           <Stack spacing={3}>
           <Typography>Toplam {product.length} ürün görüntüleniyor</Typography>
            <Typography style={{color:'gray'}} variant='subtitle2'>Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir. <strong>Protein</strong> kısaca, bir veya daha fazla amino asit artık</Typography>
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