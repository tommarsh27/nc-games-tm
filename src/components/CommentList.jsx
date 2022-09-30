import { useEffect, useState } from "react";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import { getComments } from "../utils/api";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((comments) => {
      console.log(comments)
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <section>
      <Loading isLoading={isLoading}>
        <h4>Comments:</h4>
        <ul className="ul">
          {comments.length > 0 ? 
          comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />
            })
            :
            <p>This review doesnt have any comments yet!</p>
        }
        </ul>
      </Loading>
    </section>
  );
};

export default CommentList;