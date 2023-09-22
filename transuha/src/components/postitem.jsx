import React from "react";
import classes from "./UI/Button/MyButton.module.css"

const PostItem = (props) => {
    return (
      <div>
        <div className='post'>
          <div className='post-content'>
            <strong>{props.number} {props.post.title}</strong>
            <div>{props.post.body}</div>
          </div>
          <div className='post-btns'>
            <button
              onClick={() => props.remove(props.post)} // Call onDelete with the post id
              className={classes.deleteBtn}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default PostItem;