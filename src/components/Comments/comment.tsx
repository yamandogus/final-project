import { Box, Container, Pagination, Typography} from "@mui/material";
import { useState } from "react";
import HomeCooments, { CommentsDataProps } from "./homeComments";

interface CommentsProps {
  reviews: CommentsDataProps[];
}
const Comments = ({reviews}: CommentsProps) => {
  const [page, setPage] = useState(1);
  const commentLimit = 6;

  const handleChangePage = (_: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  const reviewsData = Array.isArray(reviews) ? reviews : [];
  const totalPages = Math.ceil(reviewsData.length / commentLimit);
  const startIndex = (page - 1) * commentLimit;
  const selectedReviews = reviewsData.slice(startIndex, startIndex + commentLimit);

  return (
    <Box sx={{ my: 10 }}>
      <Container>
        {reviewsData.length > 0 ? (
          <>
            {selectedReviews.map((review, index) => (
              <HomeCooments
                key={`${review.first_name}-${review.created_at}-${index}`}
                stars={review.stars}
                first_name={review.first_name}
                created_at={review.created_at}
                last_name={review.last_name}
                title={review.title}
                comment={review.comment}
              />
            ))}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 5
            }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                color="primary" 
              />
            </Box>
          </>
        ) : (
          <Typography variant="h6" textAlign="center">Henüz yorum bulunmamaktadır.</Typography>
        )}
      </Container>
    </Box>
  );
};
export default Comments;



