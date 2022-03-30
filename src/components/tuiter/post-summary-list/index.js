// import React from 'react'
//
// import PostSummaryItem from "./PostSummaryItem.js";
// // import posts from './posts.json'
// import { useSelector } from "react-redux";
//
// const PostSummaryList = () => {
//     const posts = useSelector(state => state.tuits);
//
//     return (
//     <div id="wd-explore-post-list">
//       {posts.map(post => {
//         return <PostSummaryItem post={post} />
//     })
//     }
//     </div>
//   );
// }
//
// export default PostSummaryList;

import React from 'react'

import PostSummaryItem from "./PostSummaryItem.js";
import tuits from './posts.json'

const PostSummaryList = () => {
    return (
        <div id="wd-explore-tuit-list">
            {tuits.map(tuit => {
                return <PostSummaryItem tuit={tuit} />
            })}
        </div>
    );
}

export default PostSummaryList;