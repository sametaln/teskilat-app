import './status.css';

const Status = ({ user, img }) => {
  return (
    <li className="rightbar-status-friend">
      <img
        className="rightbar-friend-img"
        src={img + user.profilePicture}
        alt="Friend"
      />
      <div className="rightbar-text">
        <span className="rightbar-friend-name">{user.username}</span>
        <span className="rightbar-status">Playing LoL</span>
      </div>
    </li>
  );
};

export default Status;
