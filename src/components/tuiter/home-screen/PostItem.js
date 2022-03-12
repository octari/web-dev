import React from 'react'

const PostItem = ({ author, description, imageSrc, link, timeStamp, interactionsCount }) => {
    return (
    <div className="wd-post-item d-flex">
      <img  className="wd-post-profileImage"
            src={author.profileImgSrc}
            alt={`${author}'s profile`}
      />
      <div>
        <div>
          <p className="wd-post annotations">
            <span className="wd-postauthor">{author.name}</span>
            <span>{author.handle}</span>
              {timeStamp &&
               <span>&nbsp;•&nbsp;{timeStamp}</span>}
          </p>
          <p>{description}</p>
        </div>
        {link &&
          <div className="wd-post-link">
            <img 
              src={link.previewImageSrc}
              className="wd-post-image wd-post-link-image"
              alt="" 
            />
            <div className="wd-post-link-text">
              <p className="wd-post-link-title">{link.previewTitle}</p>
              <p className="wd-post-link-description">{link.previewDescription}</p>
              <p className="wd-post-link-url">
                <a href={`https://${link.baseUrl}`} target="_blank" rel="noopener noreferrer">{link.baseUrl}</a>
              </p>
            </div>
          </div>
        }
          {imageSrc &&
           <img
               src={imageSrc}
               className="wd-post-image"
               alt=""
           />
          }
        <div className="wd-post-interactions d-flex justify-content-between">
          <div>
            <i className="far fa-regular fa-comment"></i>
            {interactionsCount.comments}
          </div>
          <div>
            <i className="fa-solid fa-retweet"></i>
            {interactionsCount.retweets}
          </div>
          <div>
            <i className="far fa-heart"></i>
            {interactionsCount.likes}
          </div>
          <div>
            <i className="far fa-share-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;