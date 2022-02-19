import './rightbar.css';
import { Users } from '../../dummyData';
import Status from '../status/Status';

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <div className="rightbar-status-container">
        <ul className="rightbar-status-list">
          {Users.map((user) => (
            <Status key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info"></div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
