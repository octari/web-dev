import React from 'react'

import PostItem from "./PostItem.js";
import posts from "./homePosts.json"

const PostList = () => {
    return (
    <div className="wd-post-list">
        {posts.map(post => {
            return (PostItem(post));
        })}
    </div>
  );
}

export default PostList;