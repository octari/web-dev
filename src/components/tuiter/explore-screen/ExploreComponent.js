import React from 'react'

import PostSummaryList from "../post-summary-list/index.js";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="wd-explore-search">
                    <div className="input-group">
                              <span className="input-group-text">
                                  <i className="fa fa-search wd-color-light-grey"/>
                              </span>
                        <input type="text" className="form-control" placeholder="Search Tuiter"/>

                    </div>
                    <div>
                        <a className="setting-icon-style" href="explore-settings.html"><i
    className="fa fa-cog fa-2x"/></a>
                    </div>

                </div>
            </div>

            <nav id="wd-explore-tabs" className="mt-2">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#for-you">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#trending">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#news">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#sports">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#entertainment">Entertainment</a>
                    </li>
                </ul>
            </nav>

            <div id="wd-explore">
                <div id="wd-explore-featured">
                    <h4>SpaceX's Starship</h4>
                </div>
                <PostSummaryList />
            </div>
        </>
    );
}
export default ExploreComponent;
