import React from "react";
import PostItem from "./postitem";
const PostList = ({posts, title}) => {
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
            <PostItem number={index + 1} post={post} key={index}/>
            )}
        </div>
    )
}

export default PostList;