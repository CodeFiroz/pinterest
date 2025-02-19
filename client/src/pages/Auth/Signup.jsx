import './sign-in.css'
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <>
    
    <div className="account-wrapper">

        <div className="account-box">

            <div className="form-area">

                <h2>
                    Welcome To Pinterest 👋!
                </h2>
                <p>
                   connect with us.
                </p>

                <label>Name</label>
                <div className="input-field">
                    <input type="text" name='name' id='name' />
                    <i className="fi fi-rr-user"></i>
                </div>


                <label>Email Address</label>
                <div className="input-field">
                    <input type="text" name='username' id='username' />
                    <i className="fi fi-rr-at"></i>
                </div>

                <label>Password</label>
                <div className="input-field">
                    <input type="password" name='password' id='password' />
                    <i className="fi fi-rr-eye"></i>
                </div>

                <button>Sign in</button>

                <p className="info">
                    Already have an account <Link to="/login">Login  Here</Link>
                </p>

            </div>

            <div className="image-area">
                <img src="https://i.pinimg.com/736x/d8/a0/25/d8a0251803ec6c9cd28901caeeaec8f3.jpg" alt="" />
            </div>

        </div>

    </div>

    </>
  )
}

export default Signup