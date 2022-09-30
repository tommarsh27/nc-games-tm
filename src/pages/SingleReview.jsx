import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ReviewCard from "../components/ReviewCard";
import { getSingleReview } from "../utils/api";
import CommentList from "./CommentList";

const SingleReview = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id)
    .then((review) => {
        setReview(review);
        setIsLoading(false);
    })
  }, [review_id]);

  return (
    <section>
      <Loading isLoading={isLoading}>
        <ReviewCard review={review} />
        <CommentList />
      </Loading>
    </section>
  );
};

export default SingleReview;
