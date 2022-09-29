import React from "react";

const SingleReviewCard = ({ review }) => {
  const { title, designer, review_img_url, review_body, votes } = review;
  return (
    <li>
        <h2>{title}</h2>
        <h3>{designer}</h3>
        <p>{review_body}</p>
        <img className="imgURLs" src={`${review_img_url}`} alt={title}></img>
      <p>Votes - {votes}</p>
    </li>
  );
};

export default SingleReviewCard;