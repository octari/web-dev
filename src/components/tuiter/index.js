import React from "react";
import {Link} from "react-router-dom";
// import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowList from "./who-to-follow-list/WhoToFollowListItem";
// import PostSummaryList from "./post-summary-list";
import ExploreScreen from "./explore-screen/ExploreScreen";

import "./explore.css"

const Index = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>

            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<PostSummaryList/>*/}
            <ExploreScreen/>
        </>
    )
};

export default Index;
