import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';



const cart = true

const DrawerList = () => {
  return (
    <Box sx={{ width: 350 }} role="presentation" onClick={(e)=> e.stopPropagation()}>
      <Typography sx={{fontWeight:'bolder', fontSize:18}}>SEPETİM</Typography>
      <Divider />
      {!cart ? <Typography>Sepet Boş</Typography>:<Typography>Sepet Boş</Typography>} 
    <Stack marginBottom={1} textAlign={'center'} position={'absolute'} bottom={0} >
      <Typography variant='subtitle2' fontWeight={'bolder'} textAlign={'end'} mr={5}>Toplam 499 TL</Typography>
       <Button href='' variant='contained'
        sx={{
            px:10,
            mx:5,
            backgroundColor:'black',
            '&:hover':{backgroundColor:'black'}
        }}
        onClick={(e)=> e.stopPropagation()}
        >
        DEVAM ET <ArrowRightIcon/>
        </Button>
    </Stack>
    </Box>
  );
};

export default DrawerList;