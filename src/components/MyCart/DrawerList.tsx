import React from 'react';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface DrawerListProps {
  onClose: () => void;
}

const cart = false

const DrawerList: React.FC<DrawerListProps> = ({ onClose }) => {
  return (
    <Box sx={{ width: 350 }} role="presentation" onClick={onClose}>
      <Typography sx={{fontWeight:'bolder', fontSize:18}}>SEPETİM</Typography>
      <Divider />
 
      {!cart ? <Typography>Sepet Boş</Typography>:<Typography>Sepet Dolu</Typography>}


    <Stack textAlign={'center'} position={'relative'}>
       
        <Link to={'#'} style={{
            color:'white',
            textDecoration:'none',
        }}>DEVAM ET 
       <Button variant='contained'
        sx={{
            marginBottom:-150,
            px:10,
            mx:3,
            backgroundColor:'black',
            '&:hover':{backgroundColor:'black'}
        }}
        onClick={(e)=> e.stopPropagation()}
        >
        DEVAM ET <ArrowRightIcon/>

        </Button>
        </Link>
    </Stack>
    </Box>
  );
};

export default DrawerList;
