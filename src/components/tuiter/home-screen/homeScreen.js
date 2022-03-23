import React from 'react'

// import NavigationSidebar from "../NavigationSidebar/index";
import PostList from "./PostList";
import WhatsHappening from "../WhatsHappening";
// import PostSummaryList from "../post-summary-list/index";

import '../../../explore.css'

const HomeScreen = () => {
    return (
        <div
            id="wd-home-body"
        >
            <WhatsHappening/>
            <PostList />
        </div>
    )
}

export default HomeScreen