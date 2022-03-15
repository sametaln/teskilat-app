import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = ({ username }) => {
  axios.defaults.port = 8800;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`http://localhost:8800/api/posts/profile/` + username)
        : await axios.get(
            'http://localhost:8800/api/posts/timeline/620944d450192832c695a43c'
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

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
