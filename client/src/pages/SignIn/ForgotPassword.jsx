import './SignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    const [username, setUsername] = useState("")

 

    const [error, setError] = useState("");

 
  

    
  const validateForm = ()=>{

    setError("");

   if(username == ""){
      setError("Please enter your username or email address.")
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

                    <h1>Forgot Password</h1>
                    <p>
                        get a password reset email on your registred email address.
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
                                value={username}
                                onChange={(e)=> setUsername(e.target.value)}
                            />
                            <i className="bi bi-person"></i>
                        </div>

                       

                        <button>Forgot Password</button>
                       
                        <p className="more-text">
                                 Remembred password <Link to="/sign-in">Sign in here.</Link>
                        </p>

                    </form>

                </div>

            </div>

        </>
    )
}

export default ForgotPassword
