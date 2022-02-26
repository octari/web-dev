const WhoToFollowListItem = (who) => {
    return(`
    <div class="tuiter-follow-recommendation">
      <div class="profile-summary">
        <img src="${who.avatarIcon}" />
        <div>
          <p><b>${who.userName}</b></p>
          <p>@${who.handle}</p>
        </div>
      </div>
      <button class="btn btn-light">Follow</button>
    </div>
  `);
}

export default WhoToFollowListItem;