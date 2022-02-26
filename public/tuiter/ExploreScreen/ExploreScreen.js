import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreComponent/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div id="tuiter-nav"
                class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div id="wd-explore-body"
                class="col-6 col-md-6 col-lg-4 col-xl-6">
                ${ExploreComponent()}
            </div>
            <div id="tuiter-follow"
                class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
