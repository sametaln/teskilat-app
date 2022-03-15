import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Topbar = () => {
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
  }, []);

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" className="logo-router">
          <span className="logo">Teskilat</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <Search className="search-icon" />
          <input placeholder="Search something" className="searchbar-input" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Home</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">3</span>
          </div>
        </div>
        <img
          src={user.profilePicture || PF + 'person/noAvatar.png'}
          alt="Profile Photo"
          className="topbar-img"
        />
      </div>
    </div>
  );
};

export default Topbar;
