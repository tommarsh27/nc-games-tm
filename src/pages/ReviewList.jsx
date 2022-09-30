import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ReviewCard from "../components/ReviewCard";
import CategoryBar from "../components/CategoryBar";
import { getReviews } from "../utils/api";

const ReviewList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(slug)
    .then((reviews) => {
      setReviews(reviews);
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
