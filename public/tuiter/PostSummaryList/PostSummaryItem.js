const PostSummaryItem = ({ image, time, title, topic, userName }) => {
    return (`
    <div class="wd-explore-post">
      <div>
        <p class="wd-explore-annotations">
          <span>${topic}</span>
        </p>
        <p class="wd-explore-annotations">
          <span class="wd-explore-feed-author">${userName}</span>
          <span>&nbsp•&nbsp</span>
          <span>${time}</span>
        </p>
        <p class="wd-explore-title">${title}</p>
      </div>
      <img class="wd-card-img-right
        rounded d-flex h-75"
        src="${image}"
        class="wd-post-image"
      />
    </div>
  `);
}

export default PostSummaryItem;