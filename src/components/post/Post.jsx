import './post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post({ post }) {
  const user = Users.filter((u) => u.id === post.userId);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={PF + user[0].profilePicture}
              alt=""
              className="post-profile-img"
            />
            <span className="post-profile-name">{user[0].username}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert className="post-settings" />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc}</span>
          <img src={PF + post.photo} alt="" className="post-img" />
        </div>
        <div className="post-bottom ">
          <div className="post-bottom-left">
            <img
              src="assets/like.png"
              alt=""
              className="post-like-icon"
              onClick={() => {
                if (!isLiked) {
                  setLike(like + 1);
                  setIsLiked(true);
                } else {
                  setLike(like - 1);
                  setIsLiked(false);
                }
              }}
            />
            <span className="post-like-counter">{like} people have liked</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
