import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>

            <div className='sidebar'>

                <div className="top-bar">

                    <div className="logo">
                        <Link to="/">
                            <i className="fi fi-brands-pinterest"></i>
                        </Link>
                    </div>

                    <ul className="navbar">

                        <li>
                            <Link to="/">
                                <i className="fi fi-rr-home"></i>
                                <span>Home</span>
                            </Link>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fi fi-rr-compass-alt"></i>
                                <span>Explore</span>
                            </a>
                        </li>

                        <li>
                            <Link to="/new">
                                <i className="fi fi-rr-square-plus"></i>
                                <span>Create</span>
                            </Link>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fi fi-rr-bell"></i>
                                <span>Notifications</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fi fi-rr-comment-alt"></i>
                                <span>Messages</span>
                            </a>
                        </li>

                    </ul>

                </div>

                <ul className="navbar">
                    <li>
                        <a href="#">
                            <i className="fi fi-rr-settings"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>



            </div>


            <div className="mobileNav">
                <ul>
                    <li className='active'><Link to="/">
                        <i className="fi fi-rr-house-blank"></i>
                    </Link></li>

                    <li><a href="#">
                        <i className="fi fi-rr-search"></i>
                    </a></li>

                    <li><Link to="/new">
                    <i className="fi fi-rr-plus"></i>
                    </Link></li>

                    <li><a href="#">
                    <i className="fi fi-rr-bell"></i>
                    </a></li>

                    <li><Link to="/profile">
                    <i className="fi fi-rr-user"></i>
                    </Link></li>
                </ul>
            </div>

        </>



    )
}

export default Sidebar