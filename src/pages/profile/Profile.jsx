import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const Profile = () => {
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
    <div>
      <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profile-right">
            <div className="profile-right-top">
              <div className="profile-cover">
                <img
                  src={user.coverPicture || PF + 'person/noCover.png'}
                  alt=""
                  className="profile-cover-img"
                />
                <img
                  src={user.profilePicture || PF + 'person/noAvatar.png'}
                  alt=""
                  className="profile-user-img"
                />
              </div>
              <div className="profile-info">
                <h4 className="profile-info-name">{user.username}</h4>
                <span className="profile-info-desc">{user.desc}</span>
              </div>
            </div>
            <div className="profile-right-bottom">
              <Feed username={user.username} />
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Profile;
