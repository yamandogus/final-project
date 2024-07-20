import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface qestionData{
    title: string;
    details: string;
}
const Accordions = ({title, details}: qestionData) => {
  return (
    <>
     <Accordion sx={{mb:1}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight:'bolder'}}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography variant='subtitle1'>
            {details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Accordions