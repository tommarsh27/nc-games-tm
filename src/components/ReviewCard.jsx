import React from "react";
import { useState } from "react";
import { patchReviews } from "../utils/api";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const { review_id, title, designer, review_img_url, review_body, votes } = review;
  const [preVote, setPreVote] = useState(0);

  const handleClick = (vote) => {
    setPreVote((currentPreVote => (currentPreVote += vote)))
    patchReviews(review_id, vote).then(() => {
    }).catch(() => {
      setPreVote((currentPreVote => (currentPreVote -= vote)))
      return (
        <p>Oops! Something went wrong!</p>
      )
    })
  }
  
  return (
    <li>
        <h3>{title}</h3>
        <h4>By {designer}</h4>
        <p>{review_body}</p>
      <Link to={`/reviews/${review_id}`}>
        <img className="imgURLs" src={`${review_img_url}`} alt={title}></img>
      </Link>
      <p>Votes - {votes + preVote}</p>
      <button onClick={() => handleClick(-1)}>Downvote!</button>
      <button onClick={() => handleClick(1)}>Upvote!</button>
    </li>
  );
};

export default ReviewCard;