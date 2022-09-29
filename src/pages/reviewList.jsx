import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
import CategoryBar from "../components/CategoryBar";

const ReviewList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const {slug} = useParams();

  useEffect(() => {
    setIsLoading(true);
    console.log(slug)
    let reviewURL = `https://be-games-project-tm.herokuapp.com/api/reviews`
    if(slug) {reviewURL = reviewURL + `?category=${slug}`}
    console.log(reviewURL)
    axios
      .get(reviewURL)
      .then(({ data }) => {
        setReviews(data.reviews);
        setIsLoading(false);
      });
  }, [slug]);

  return (
    <section>
        <CategoryBar />
      <Loading isLoading={isLoading}>
        <h2>Reviews</h2>
        <ul className="ul">
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </ul>
      </Loading>
    </section>
  );
};

export default ReviewList;

