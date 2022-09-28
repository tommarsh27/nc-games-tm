import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const { review_id, title, designer, review_img_url, review_body, votes } = review;
  return (
    <li>
        <h2>{title}</h2>
        <h3>{designer}</h3>
        <p>{review_body}</p>
      <Link to={`/reviews/${review_id}`}>
        <img className="imgURLs" src={`${review_img_url}`} alt={title}></img>
      </Link>
      <p>Votes - {votes}</p>
    </li>
  );
};

export default ReviewCard;