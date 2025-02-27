import './Header.css'

const Header = () => {
  return (
   <>
    
    <div className="header">

    <div className="site-logo">
        <a href="#">
            <i className="bi bi-pinterest"></i>
            <span>Pinterest</span>
        </a>
    </div>

  

    <div className="account">
        <img src="https://i.pinimg.com/736x/bf/1c/bb/bf1cbb9a00723bfe5e0a13ba021e8902.jpg" alt="" />
        <span>User Account</span>
    </div>

    </div>

    <div className="navbar">
        <ul>
            <li>
                <a href="#" className='active'>

                    <i className="bi bi-house-fill"></i>
                    <span>Home</span>

                </a>
            </li>

            <li>
                <a href="#">

                    <i className="bi bi-pin"></i>
                    <span>Create Pin</span>

                </a>
            </li>

            <li>
                <a href="#">

                    <i className="bi bi-bookmark"></i>
                    <span>Saved Pin</span>

                </a>
            </li>

            <li>
                <a href="#">

                    <i className="bi bi-person"></i>
                    <span>My Account</span>

                </a>
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