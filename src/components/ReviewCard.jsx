import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const { review_id,  } = review;
  return (
    <li>
      <Link to={`/reviews/${review_id}`}>
        <h2>{review_id}</h2>

      </Link>
    </li>
  );
};

export default ReviewCard;