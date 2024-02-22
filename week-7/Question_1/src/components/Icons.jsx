import { useRecoilValue } from "recoil";
import { followerCount, likeCount, photoCount } from "../atoms";

export default function Icons() {
  const fcount = useRecoilValue(followerCount);
  const lcount = useRecoilValue(likeCount);
  const pcount = useRecoilValue(photoCount);
  return (
    <div className="iconDiv">
      <div className="followerDiv">
        <div className="number">
          <b>
            <p>{fcount}K</p>
          </b>
        </div>
        <p className="content">Followers</p>
      </div>
      <div className="likeDiv">
        <div className="number">
          <b>
            <p>{lcount}K</p>
          </b>
        </div>
        <p className="content">Likes</p>
      </div>
      <div className="photoDiv">
        <div className="number">
          <b>
            <p>{pcount}K</p>
          </b>
        </div>
        <p className="content">Photos</p>
      </div>
    </div>
  );
}
