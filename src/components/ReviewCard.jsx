import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const { review_id, title, designer, review_img_url, review_body, votes } = review;
  return (
    <li>
        <h3>{title}</h3>
        <h4>By {designer}</h4>
        <p>{review_body}</p>
      <Link to={`/reviews/${review_id}`}>
        <img className="imgURLs" src={`${review_img_url}`} alt={title}></img>
      </Link>
        <p>Votes - {votes}</p>
      <Link to={`/reviews/${review_id}/comments`}>
        <button>Show Comments</button>
      </Link>
    </li>
  );
};

export default ReviewCard;