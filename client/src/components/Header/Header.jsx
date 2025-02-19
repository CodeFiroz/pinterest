import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">

        <div className="searchBox">
        <i className="fi fi-rr-search"></i>
        <input type="text" placeholder='Search' />
        </div>

        <div className="accountAvatar">
            <Link to="/profile">
            <img src="https://i.pinimg.com/280x280_RS/94/a9/df/94a9df645c7364d82763b82034427586.jpg" alt="" />
            </Link>
        </div>

    </div>
  )
}

export default Header