import { Box, Container} from '@mui/material'
import Comments1 from './Comments1';


export interface CommentProp{
    rating: number;
    name: string;
    date: string;
    comment: string;
    shortComment: string;
}

const reviews: CommentProp[] = [
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    rating: 5,
    name: "EREN U.",
    date: "06/05/24",
    comment: "Her zamanki kalite. Teşekkürler",
    shortComment: "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler."
  }
];

const Yorumlar = () => {
  return (
    <>
       <Box sx={{mt:10}}>
      <Container>
        {reviews.map((review, index)=>(
          <Comments1
            key={index}
            rating={review.rating}
            date={review.date}
            comment={review.comment}
            name={review.name}
            shortComment={review.shortComment}
          />
        ))}
      </Container>
    </Box>
    </>
  )
}

export default Yorumlar