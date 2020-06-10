// You will add code to this file
import React, { useState, useEffect } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({ username: 'Maryam', text: '' });

  useEffect(() => {
    setComments(props.comments);
  }, [])

  const changeComment = event => {
    setComment({ ...comment, text: event.target.value });
    //console.log(comment.text);
  };
  const submitComment = event => {
    event.preventDefault();
    setComments([...comments, comment]);
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */
        comments.map(commentObj => {
          return <Comment key={commentObj.username} comment={commentObj} />
        })
      }
      <CommentInput comment={comment.text} submitComment={submitComment} changeComment={changeComment} />
    </div>
  );
};

export default CommentSection;
