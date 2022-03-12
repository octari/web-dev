import React from 'react';
import who from "./who.json";

import "../explore.css"

const WhoToFollowListItem = ({ who: { avatarIcon, userName, handle } }) => {
    return(
    <div className="tuiter-follow-recommendation">
      <div className="profile-summary">
        <img src={avatarIcon} alt={`${userName}'s avatar`} />
        <div>
          <p><b>{userName}</b></p>
          <p>@{handle}</p>
        </div>
      </div>
      <button className="btn btn-light">Follow</button>
    </div>
  );
}

const WhoToFollowList = () => {
  return (
      <div
          id="tuiter-follow-recommendation"
      >
        <div className="list-group pseudo-card ">
          <h5>Who to follow</h5>
          {who.map(item => {
            return <WhoToFollowListItem who={item} key={item.handle} />;
          })}
        </div>
      </div>
  );
}

export default WhoToFollowList;