import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import CommentCard from "../components/CommentCard";
import { getComments } from "../utils/api";
import ReviewCard from "../components/ReviewCard";

const CommentList = ({review}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const {review_id} = review;
  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <section>
      <Loading isLoading={isLoading}>
        <ReviewCard review={review} />
        <h4>Comments:</h4>
        <ul className="ul">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </Loading>
    </section>
  );
};

export default CommentList;