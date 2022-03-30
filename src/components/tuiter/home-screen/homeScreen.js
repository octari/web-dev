import React from 'react'

// import NavigationSidebar from "../NavigationSidebar/index";
import TuitList from "./TuitList";
import WhatsHappening from "../WhatsHappening/index";
// import PostSummaryList from "../post-summary-list/index";

import '../../../explore.css'

const HomeScreen = () => {
    return (
        <div
            id="body"
        >
            <WhatsHappening/>
            <TuitList />
        </div>
    )
}

export default HomeScreen