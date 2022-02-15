import './share.css';
import { PermMedia } from '@mui/icons-material';

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="share-profile-img"
          />
          <input placeholder="Share something" className="share-input" />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMedia />
              <span className="share-option-text">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
