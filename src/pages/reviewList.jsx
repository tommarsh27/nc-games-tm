import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ReviewCard from "../components/ItemCard";
import axios from "axios";

const reviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://be-games-project-tm.herokuapp.com/api/reviews")
      .then(({ data }) => {
        setReviews(data.reviews);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <Loading isLoading={isLoading}>
        <ul>
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </ul>
      </Loading>
    </section>
  );
};

export default ReviewList;

