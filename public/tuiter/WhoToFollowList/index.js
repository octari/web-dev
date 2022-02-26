import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group pseudo-card">
            <!-- continue here -->
            <div>
                <p class="profile-summary-follow">Who to follow</>
            </div>
            ${
                who.map(whoItem => {
                    return(WhoToFollowListItem(whoItem));
                }).join('')
            }
            </ul>
`); }
export default WhoToFollowList;
