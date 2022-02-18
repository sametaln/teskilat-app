import './status.css';

const Status = ({ user }) => {
  return (
    <li className="rightbar-status-friend">
      <img
        className="rightbar-friend-img"
        src={user.profilePicture}
        alt="Friend Image"
      />
      <div className="rightbar-text">
        <span className="rightbar-friend-name">{user.username}</span>
        <span className="rightbar-status">Playing LoL</span>
      </div>
    </li>
  );
};

export default Status;
