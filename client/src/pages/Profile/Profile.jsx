import './Profile.css'
import Pins from '../../components/Pins/Pins'
import useAuthStore from '../../store/authStore'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMyPins } from '../../api/pins'
import { getUser } from '../../api/auth'
import Loader from '../../components/Loader/Loader'

const Profile = () => {

    const { user } = useAuthStore();
    const [loading, setLoading] = useState(true);

    const [userinfo, setUserInfo] = useState({});
    const { username } = useParams();
    const [pins, setPin] = useState([]);

    useEffect(() => {
        const getMe = async () => {
            try {
                const response = await getUser(username);
                if (!response.success) {
                    console.log(response.error);
                    return false;
                }
                setUserInfo(response.user);
                
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        getMe();
    }, [username]); // Add username to dependency array.

    useEffect(() => {
        const myPins = async () => {
            if (!userinfo.id) return; // Add a check to prevent running before userinfo.id is available

            try {
                const response = await getMyPins(userinfo.id);
                if (!response.success) {
                    console.log(response.error);
                    return false;
                }
                setPin(response.pins);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching pin details:", error);
            }
        };
        myPins();
    }, [userinfo.id]); // Add userinfo.id to dependency array.


        

  return (
    <>

{loading ? (
        <Loader />
      ) : (
        <div className="container">

    
        <div className="profile_header">
    
            <div className="profile_info">
    
                <div className="me">
                    <img src={userinfo.pfp} alt="" />
                    <div>
                        <h3>{userinfo.name}</h3>
                        <p>
                            @{userinfo.username}
                        </p>
                    </div>
                </div>
    
                <div className="bio">
                    
                    <pre>{userinfo.bio}</pre>
                    
                </div>
    
                {
                    user.id === userinfo.id ? <div className="action-buttons"><Link to="/update">Edit Profile</Link></div> : ''
                }
    
                
    
            </div>
    
            <div className="feature_image">
                <img src={userinfo.cover} alt="" />
            </div>
    
    
        </div>
    
    
            <h4>My Pins</h4>
    
            <div className="pin-grid">
    
            {
                  pins.map((pin, index) => (
                    <Pins key={index} img={pin.image} id={pin._id} title={pin.title} />
                  ))
              }
    
            </div>
    
        </div>
      )}



    </>
  )
}

export default Profile