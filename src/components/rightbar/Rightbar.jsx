import './rightbar.css';
import { Users } from '../../dummyData';
import Status from '../status/Status';

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <div className="rightbar-status-container">
        <ul className="rightbar-status-list">
          {Users.map((user) => (
            <Status key={user.id} user={user} img={PF} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <p>Info</p>
        </div>
        <div className="rightbar-friend-list"></div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
