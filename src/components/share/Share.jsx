import './share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [setProgress] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();
    fileHandler(file);
  };

  const fileHandler = async (file) => {
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newPost = {
            userId: user._id,
            desc: desc.current.value,
            img: downloadURL,
          };
          try {
            axios.post('http://localhost:8800/api/posts', newPost);
          } catch (err) {}
        });
      }
    );
  };

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src={user.profilePicture || PF + 'person/noAvatar.png'}
            alt=""
            className="share-profile-img"
          />
          <input
            placeholder="Share something"
            className="share-input"
            ref={desc}
          />
        </div>
        <hr className="share-hr" />
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
              <input
                style={{
                  display: 'none',
                }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="share-button" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
