import React from "react";

const PostItem = () => {
    return(
        <div>
            <div className='post'>
                <div className='post-content'>
                    <strong>1, Javascript</strong>
                    <div>Javascript - a programming language</div>
                </div>
                    <div className='post-btns'>
                        <button>Delete</button>
                    </div>
            </div>
        </div>
    )
}

export default PostItem;