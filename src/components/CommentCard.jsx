import React from "react";

const CommentCard = ({comment}) => {
    const {author, body} = comment;

    return (
        <li>
            <h4>{author} says:</h4>
            <p>{body}</p>
        </li>
    )
}

export default CommentCard;