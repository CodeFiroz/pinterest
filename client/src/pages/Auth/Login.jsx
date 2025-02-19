import './sign-in.css'


const Login = () => {
  return (
    <>
    
    <div className="account-wrapper">

        <div className="account-box">

            <div className="form-area">

                <h2>
                    Welcome Back 👋!
                </h2>
                <p>
                    Log in to your account.
                </p>

                <label>Email Or Username</label>
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

            </div>

            <div className="image-area">
                <img src="https://i.pinimg.com/736x/d8/a0/25/d8a0251803ec6c9cd28901caeeaec8f3.jpg" alt="" />
            </div>

        </div>

    </div>

    </>
  )
}

export default Login