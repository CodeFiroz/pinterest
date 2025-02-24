import useAuthStore from '../../store/authStore';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const {authUser} = useAuthStore();

  

  return (
    <div className="header">

        <div className="searchBox">
        <i className="fi fi-rr-search"></i>
        <input type="text" placeholder='Search' />
        </div>

        <div className="accountAvatar">
            <Link to="/profile">
            <img src={authUser.pic} alt="" />
            </Link>
        </div>

    </div>
  )
}

export default Header