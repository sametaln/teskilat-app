import './sidebar.css';
import {
  ViewTimeline,
  Chat,
  VideoLibrary,
  Bookmark,
  Event,
} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <ViewTimeline className="sidebar-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className="sidebar-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <VideoLibrary className="sidebar-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className="sidebar-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <Event className="sidebar-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />

        <ul className="sidebar-friend-list">
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt="Friend Image"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
