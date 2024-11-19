import { Grid, Rating, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
export interface CommentsDataProps{
  stars: string;
  comment: string;
  title: string;
  created_at: string;
  aroma?: string;
  first_name: string;
  last_name: string;
}

const HomeCooments = ({
  stars,
  first_name,
  last_name,
  created_at,
  comment,
  title
}: CommentsDataProps) => {
  // stars string olarak geliyor, number'a çevir
  const starValue = typeof stars === 'string' ? parseFloat(stars) : stars;
  
  // Tarih formatını düzelt
  const newDate = created_at.includes("T") 
    ? created_at.split("T")[0].split("-").reverse().join("-")
    : created_at.split("-").reverse().join("-");

  return (
    <Grid container spacing={2} className="gridYrm">
      <Grid item xs={12}>
        <Stack direction={"column"} spacing={2}>
          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Stack direction={"row"}>
              <Rating
                value={starValue}
                sx={{ mr: 2 }}
                readOnly
                icon={<StarIcon />}
                emptyIcon={<span />}
              />
              <Typography>
                <strong id="span">{`${first_name} ${last_name.charAt(0)}.`}</strong>
              </Typography>
            </Stack>
            <Typography>
              <strong>{newDate}</strong>
            </Typography>
          </Stack>
          <Typography variant="subtitle1">
            <strong>{title}</strong>
          </Typography>
          <Typography variant="subtitle2">{comment}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomeCooments;