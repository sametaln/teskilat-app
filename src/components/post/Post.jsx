import './post.css';
import { MoreVert } from '@mui/icons-material';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(
    () => setIsLiked(post.likes.includes(currentUser._id)),
    [post.likes, currentUser._id]
  );

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users?userId=${post.userId}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put('http://localhost:8800/api/posts/' + post._id + '/like', {
        userId: currentUser._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`/profile/${user.username}`} className="post-router">
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + 'person/noAvatar.png'
                }
                alt=""
                className="post-profile-img"
              />
              <span className="post-profile-name">{user.username}</span>
            </Link>

            <span className="post-date">{format(post.createdAt)}</span>
          </div>

          <div className="post-top-right">
            <MoreVert className="post-settings" />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc}</span>
          <img src={post.img} alt="" className="post-img" />
        </div>
        <div className="post-bottom ">
          <div className="post-bottom-left">
            <img
              src={`${PF}like.png`}
              alt=""
              className="post-like-icon"
              onClick={likeHandler}
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
