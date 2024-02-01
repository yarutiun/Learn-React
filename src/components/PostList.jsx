import React from "react";
import PostItem from "./postitem";

const PostList = ({posts, title, remove}) => {
    return(
        <div>
            <h1 style={{textAlign: 'center', color: 'teal'}}>{title}</h1>
            {posts.map((post, index) =>
            <PostItem remove={remove} number={index + 1} post={post} key={index}/>
            )}
        </div>
    )
}

export default PostList;