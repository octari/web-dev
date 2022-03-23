import React from 'react'

// import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
// import WhoToFollowList from "../who-to-follow-list/WhoToFollowListItem.js";

import "../../../explore.css"

const ExploreScreen = () => {

    return(
        <div
            id="wd-explore-body"
        >
            <ExploreComponent />
        </div>
    )
}

export default ExploreScreen