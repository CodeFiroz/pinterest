import './SignIn.css';
import { useState } from 'react';

const SignUp = () => {

  const [formdata, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })

  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState("bi-lock");

  const [error, setError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})?$/;
  const usernameRegex = /^(?![_.])[a-zA-Z0-9._]{3,20}(?<![_.])$/;

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const showPassword = () => {

    if (passwordType == "password"){ 
      setPasswordIcon("bi-unlock") 
      setPasswordType("text") 
    }else { 
      setPasswordIcon("bi-lock") 
      setPasswordType("password") 
    }
  }

  const validateForm = ()=>{

    setError("");

    if(formdata.name == ""){
      setError("Please enter your name.")
      return false;
    }else if(!nameRegex.test(formdata.name)){
      setError("invalid name expresion.")
      return false;
    }else if(formdata.username == ""){
      setError("Please enter a username.")
      return false;
    }else if(!usernameRegex.test(formdata.username)){
      setError("Invalid username. Use 3-20 letters, numbers, dots, or underscores, but don't start or end with . or _")
      return false;
    }else if(formdata.email == ""){
      setError("Please enter a email address.")
      return false;
    }else if(!emailRegex.test(formdata.email)){
      setError("Invalid email address.")
      return false;
    }else if(formdata.password == ""){
      setError("Please create a password")
      return false;
    }else if(formdata.password.length < 5){
      setError("Password must be 6  characters long")
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

          <h1>Sign up</h1>
          <p>
            Join the world of images with us.
          </p>

          {error === "" ? '' : <div className="error">
            <i className="bi bi-info-circle"></i>
            <span>{error}</span>
          </div>}




          <form onSubmit={handleSubmit}>

            <label htmlFor="name">Full Name</label>
            <div className="input-field">
              <input
                type="text"
                name='name'
                value={formdata.name}
                onChange={handleChange}
              />
              <i className="bi bi-person"></i>
            </div>

            <label htmlFor="username">Username</label>
            <div className="input-field">
              <input
                type="text"
                name='username'
                value={formdata.value}
                onChange={handleChange}
              />
              <i className="bi bi-file-earmark-person"></i>
            </div>

            <label htmlFor="email">Email address</label>
            <div className="input-field">
              <input
                type="email"
                name='email'
                value={formdata.email}
                onChange={handleChange}
              />
              <i className="bi bi-at"></i>
            </div>

            <label htmlFor="password">Create a  strong password</label>
            <div className="input-field">
              <input
                type={passwordType}
                name='password'
                value={formdata.password}
                onChange={handleChange}
              />
              <i className={`bi ${passwordIcon}`} onClick={showPassword}></i>
            </div>

            <button>Register</button>



            <p className="more-text">
              Already have an account <a href="#">Sign in here.</a>
            </p>

          </form>

        </div>

      </div>

    </>
  )
}

export default SignUp
