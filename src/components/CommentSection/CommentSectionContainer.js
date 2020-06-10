// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const { comments } = props;
  //console.log(props);
  const [postComment, setPostComment] = useState('');
  return (
    <div>
      {/* map through the comments data and return the Comment component */
        comments.map(commentObj => {
          return <Comment key={commentObj.username} comment={commentObj} />
        })
      }
      <CommentInput postComment={setPostComment} />
    </div>
  );
};

export default CommentSection;
