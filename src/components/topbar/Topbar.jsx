import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
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
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture || PF + 'person/noAvatar.png'}
            alt="Profile"
            className="topbar-img"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
