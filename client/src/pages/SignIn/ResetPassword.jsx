import './SignIn.css';
import { useState } from 'react';

const ResetPassword = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState("bi-lock");
  const [password, SetPassword] = useState("")

  const showPassword = () => {

    if (passwordType == "password"){ 
      setPasswordIcon("bi-unlock") 
      setPasswordType("text") 
    }else { 
      setPasswordIcon("bi-lock") 
      setPasswordType("password") 
    }
  }

  const [error, setError] = useState("");





  const validateForm = () => {

    setError("");

    if (password == "") {
      setError("Please create a password")
      return false;
    } else if (password.length < 5) {
      setError("Password must be 6  characters long")
      return false;
    }

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) {
      return false;
    } else {

      return true;

    }


  }

  return (
    <>

      <div className="auth-wrapper">

        <div className="auth-form">

          <h1>Reset Password</h1>

          {error === "" ? '' : <div className="error">
            <i className="bi bi-info-circle"></i>
            <span>{error}</span>
          </div>}




          <form onSubmit={handleSubmit}>
            <label htmlFor="password">New Password</label>
            <div className="input-field">
              <input
                type={passwordType}
                name='password'
                value={password}
                onChange={(e)=> SetPassword(e.target.value)}
              />
              <i className={`bi ${passwordIcon}`} onClick={showPassword}></i>
            </div>



            <button>Reset Password</button>

          </form>

        </div>

      </div>

    </>
  )
}

export default ResetPassword
