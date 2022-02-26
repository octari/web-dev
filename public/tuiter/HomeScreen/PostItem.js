const PostItem = ({ author, description, imageSrc, link, timeStamp, interactionsCount }) => {
    return (`
    <div class="wd-post-item d-flex">
      <img class="wd-post-profileImage"
      src="${author.profileImgSrc}" 
      />
      <div>
        <div>
          <p class="wd-post
          annotations">
            <span class="wd-postauthor">${author.name}</span>
            <span>${author.handle}</span>
            ${timeStamp ? `<span>&nbsp•&nbsp${timeStamp}</span>` : ''}
          </p>
          <p>${description}</p>
        </div>
        ${link ? (`
          <div class="wd-post-link">
            <img 
              src="${link.previewImageSrc}" 
              class="wd-post-image wd-post-link-image"  
            />
            <div class="wd-post-link-text">
              <p class="wd-post-link-title">${link.previewTitle}</p>
              <p class="wd-post-link-description">${link.previewDescription}</p>
              <p class="wd-post-link-url">
                <a href="https://${link.baseUrl}" target="_blank">${link.baseUrl}</a>
              </p>
            </div>
          </div>
        `) : ''}
        ${imageSrc ? (`
          <img 
            src="${imageSrc}" 
            class="wd-post-image"  
          />
        `) : ''}
        <div class="wd-post-interactions d-flex justify-content-between">
          <div>
            <i class="far fa-regular fa-comment"></i>
            ${interactionsCount.comments}
          </div>
          <div>
            <i class="fa-solid fa-retweet"></i>
            ${interactionsCount.retweets}
          </div>
          <div>
            <i class="far fa-heart"></i>
            ${interactionsCount.likes}
          </div>
          <div>
            <i class="far fa-share-square"></i>
          </div>
        </div>
      </div>
    </div>
  `);
}

export default PostItem;