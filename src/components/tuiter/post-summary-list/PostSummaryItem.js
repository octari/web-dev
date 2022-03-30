import React from 'react'


const defaultPost = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "https://www.ethode.com/contentAsset/raw-data/84e3be24-58bc-499c-9d50-f8088158f11a/image"
}

const PostSummaryItem = ({ tuit: { image, time, title, topic, userName } = defaultPost }) => {
    return (
    <div className="wd-explore-post">
      <div>
        <p className="wd-explore-annotations">
          <span>{topic}</span>
        </p>
        <p className="wd-explore-annotations">
          <span className="wd-explore-feed-author">{userName}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{time}</span>
        </p>
        <p className="wd-explore-title">{title}</p>
      </div>
      <img className="wd-card-img-right
        rounded d-flex h-75 wd-post-image"
        src={image}
        alt=""
      />
    </div>
  );
}

export default PostSummaryItem;