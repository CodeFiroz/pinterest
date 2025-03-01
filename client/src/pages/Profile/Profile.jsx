import './Profile.css'
import Pins from '../../components/Pins/Pins'
import useAuthStore from '../../store/authStore'
import { Link } from 'react-router-dom'

const Profile = () => {

    const { user } = useAuthStore();

  return (
    <>

<div className="container">

    
    <div className="profile_header">

        <div className="profile_info">

            <div className="me">
                <img src={user.pfp} alt="" />
                <div>
                    <h3>{user.name}</h3>
                    <p>
                        @{user.username}
                    </p>
                </div>
            </div>

            <div className="bio">
                <p>
                <pre>{user.bio}</pre>
                </p>
            </div>

            <div className="action-buttons">
                <Link to="/update">Edit Profile</Link>
            </div>

        </div>

        <div className="feature_image">
            <img src={user.cover} alt="" />
        </div>


    </div>


        <h4>My Pins</h4>

        <div className="pin-grid">

            <Pins img="https://i.pinimg.com/236x/08/27/ab/0827ab4e7b619ab0f74b003b7e3377b4.jpg"/>
            <Pins img="https://i.pinimg.com/236x/d5/71/e3/d571e3406a1cc6933029c9ec91c0b98f.jpg"/>
            <Pins img="https://i.pinimg.com/474x/4b/95/3c/4b953cdfe9042c34d1cf54478e3035f8.jpg"/>
            <Pins img="https://i.pinimg.com/474x/c0/e7/63/c0e76382cf4a410ad55274d33ba1276a.jpg"/>
            <Pins img="https://i.pinimg.com/236x/59/e4/14/59e414c1150b8e079aa66e282ea0aa5d.jpg"/>
            <Pins img="https://i.pinimg.com/236x/e2/27/e7/e227e7d2926480ae04baa376582c0da4.jpg"/>
            <Pins img="https://i.pinimg.com/236x/aa/54/ed/aa54ede3a954e4021016e5f2a05dc5c3.jpg"/>
            <Pins img="https://i.pinimg.com/236x/ba/76/95/ba7695fb4dfedf67cc8c1bef3bc1c813.jpg"/>
            <Pins img="https://i.pinimg.com/236x/ed/a3/9a/eda39a2f240a107a2556cd14c91be54d.jpg"/>
            <Pins img="https://i.pinimg.com/236x/6d/d2/3b/6dd23b645ce92986b5ec84a498ad2860.jpg"/>

        </div>

    </div>

    </>
  )
}

export default Profile