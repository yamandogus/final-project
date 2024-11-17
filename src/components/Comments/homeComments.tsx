import { Grid, Rating, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { CommentProp } from './comment';

type Comments1Props = Omit<CommentProp, 'key'>;

const HomeCooments = ({rating, name, date, comment, shortComment}: Comments1Props) => {
  return (
    <Grid container spacing={2} className='gridYrm'>
      <Grid item xs={12}>
        <Stack direction={'column'} spacing={2}>
          <Stack direction={'row'} sx={{display:'flex', justifyContent:'space-between'}}>
           <Stack direction={'row'}>
           <Rating defaultValue={rating} sx={{mr:2}} readOnly icon={<StarIcon />} emptyIcon={<span />} />   
           <Typography><strong id='span'>{name}</strong></Typography>
           </Stack>
           <Typography><strong>{date}</strong></Typography>
          </Stack>
          <Typography variant='subtitle1'><strong>{comment}</strong></Typography>
          <Typography variant='subtitle2'>{shortComment}</Typography>
        </Stack>
      </Grid>
    </Grid> 
  )
}

export default HomeCooments