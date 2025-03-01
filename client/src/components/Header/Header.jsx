import './Header.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logout } from '../../api/auth'
import useAuthStore from '../../store/authStore'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigation = useLocation().pathname;

    const navigate = useNavigate();

    const {user, logoutUser} = useAuthStore();

    const [active, setActive] = useState(false);

    const handleLogout = async(e)=>{

        e.preventDefault();

        const response = await Logout();
        if(!response.success){
            alert(response.error)
        }else{
            logoutUser()
            navigate('/sign-in');
          }
    }

  return (
   <>
    
    <div className="header">

    <div className="site-logo">
        <Link to="/">
            <i className="bi bi-pinterest"></i>
            <span>Pinterest</span>
        </Link>
    </div>

  

    <div className={`account ${active ? 'active ' : ''}`} onClick={() => setActive(!active)}>
        <img src={user.pfp} alt="" />
        <span>{user.name}</span>

        <div className="account-option">
            <ul>
                <li>
                    <Link to={`/${user.username}`}>
                        My Account 
                        <i className="bi bi-person"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/new">
                        Create Pin
                        <i className="bi bi-plus"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/saved">
                        Saved Pins
                        <i className="bi bi-bookmark"></i>
                    </Link>
                </li>
                <li>
                    <a onClick={handleLogout}>
                        Log out
                        <i className="bi bi-box-arrow-in-right"></i>
                    </a>
                </li>
            </ul>
        </div>

    </div>

    </div>

    <div className="navbar">
        <ul>
            <li>
                <Link to="/" className={navigation === "/" ? 'active' : ''}>

                    <i className="bi bi-house-fill"></i>
                    <span>Home</span>

                </Link>
            </li>

            <li>
                <Link to="/new" className={navigation === "/new" ? 'active' : ''}>

                    <i className="bi bi-pin"></i>
                    <span>Create Pin</span>

                </Link>
            </li>

            <li>
                <Link to="/saved" className={navigation === "/saved" ? 'active' : ''}>

                    <i className="bi bi-bookmark"></i>
                    <span>Saved Pin</span>

                </Link>
            </li>

            <li>
                <Link to={`/${user.username}`} className={navigation === `/${user.username}` ? 'active' : ''}>

                    <i className="bi bi-person"></i>
                    <span>My Account</span>

                </Link>
            </li>

            <li>
                <a href="#">

                    <i className="bi bi-info"></i>
                    <span>About App</span>

                </a>
            </li>
            
        </ul>
    </div>
   </>
  )
}

export default Header