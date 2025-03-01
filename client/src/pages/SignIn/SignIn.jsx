import './SignIn.css';
import { useState } from 'react';
import { Signin } from '../../api/auth';
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const [formdata, setFormData] = useState({
        username: "",
        password: ""
    })

    const { Setlogin } = useAuthStore();



    const [passwordType, setPasswordType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState("bi-lock");

    const [loading, setLoading] = useState(false);


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


  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!validateForm()){
      return false;
    }else{

     setLoading(true)
           const response  = await Signin(formdata); 
           if(!response.success){
            setError(response.error)
            setLoading(false)
          }else{
            Setlogin(response.user);
            
          }
      
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

                        {
              loading ? <button disabled>Wait...</button> : <button>Sign in</button>
            }
                        <p className='more-text'>
                            <Link to="/forgot-password">Forgot Password ?</Link>
                        </p>

                        <p className="more-text">
                            Already have an account <Link to="/sign-up">Register here.</Link>
                        </p>

                    </form>

                </div>

            </div>

        </>
    )
}

export default SignIn