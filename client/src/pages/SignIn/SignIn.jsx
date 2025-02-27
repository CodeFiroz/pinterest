import './SignIn.css';
import { useState } from 'react';

const SignIn = () => {

    const [formdata, setFormData] = useState({
        username: "",
        password: ""
    })

    const [passwordType, setPasswordType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState("bi-lock");

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const showPassword = () => {

        if (passwordType == "password") {
            setPasswordIcon("bi-unlock")
            setPasswordType("text")
        } else {
            setPasswordIcon("bi-lock")
            setPasswordType("password")
        }


    }

    
  const validateForm = ()=>{

    setError("");

   if(formdata.username == ""){
      setError("Please enter your username.")
      return false;
    }else if(formdata.password == ""){
      setError("Please create your password")
      return false;
    }else{
      return true;
    }

  }


  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!validateForm()){
      return false;
    }else{

      return true;  
      
    }


  }

    return (
        <>

            <div className="auth-wrapper">

                <div className="auth-form">

                    <h1>Sign in</h1>
                    <p>
                        Welcome back, login and enter the world of images.
                    </p>

                    {error === "" ? '' : <div className="error">
                        <i className="bi bi-info-circle"></i>
                        <span>{error}</span>
                    </div>}




                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username or email</label>
                        <div className="input-field">
                            <input
                                type="text"
                                name='username'
                                value={formdata.username}
                                onChange={handleChange}
                            />
                            <i className="bi bi-person"></i>
                        </div>

                        <label htmlFor="password">Password</label>
                        <div className="input-field">
                            <input
                                type={passwordType}
                                name='password'
                                value={formdata.password}
                                onChange={handleChange}
                            />
                            <i className={`bi ${passwordIcon}`} onClick={showPassword}></i>
                        </div>

                        <button>Sign in</button>
                        <p className='more-text'>
                            <a href="#">Forgot Password ?</a>
                        </p>

                        <p className="more-text">
                            Already have an account <a href="#">Sign in here.</a>
                        </p>

                    </form>

                </div>

            </div>

        </>
    )
}

export default SignIn
