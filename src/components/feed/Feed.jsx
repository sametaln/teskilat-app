import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Feed = ({ username }) => {
  axios.defaults.port = 8800;
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`http://localhost:8800/api/posts/profile/` + username)
        : await axios.get(
            'http://localhost:8800/api/posts/timeline/' + user._id
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
