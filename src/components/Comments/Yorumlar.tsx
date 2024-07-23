import { Box, Container} from '@mui/material'
import Comments1 from './Comments1';
import BlazeSlider from 'blaze-slider';
import { useEffect, useRef } from 'react';


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
  const sliderRef = useRef(null)

  useEffect(()=>{
    if(sliderRef.current){
      new BlazeSlider(sliderRef.current)
    }
  })
  return (
    <>
       <Box sx={{mt:10}}>
        <div className='blaze-slider'>
          <div className='blaze-container'>
            <div className='blaze-track-container'>
              <div className='blaze-track'>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
              </div>
              <div className="my-structure">
                <button className="blaze-prev" aria-label="Go to previous slide"></button>
                <div className="blaze-pagination"></div>
                <button className="blaze-next" aria-label="Go to next slide"></button>
              </div>
              </div>
            </div>
            </div>

     
    </Box>
    </>
  )
}

export default Yorumlar