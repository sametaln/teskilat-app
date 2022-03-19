import './share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users?username=${params.username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [params.username]);

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src={user.profilePicture || PF + 'person/noAvatar.png'}
            alt=""
            className="share-profile-img"
          />
          <input placeholder="Share something" className="share-input" />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
            </div>
            <div className="share-option">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="gold" className="share-icon" />
              <span className="share-option-text">Emotes</span>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
