import { useState, useEffect } from 'react';
import './sign-in.css'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const { login , checkAuth, isAuthenticated} = useAuthStore();

    useEffect(()=>{
  
        checkAuth();
    
      }, [checkAuth]);
    
      if(isAuthenticated){
        return navigate('/');
      }


    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [passwordType, setPasswordType] = useState('password')
    const [passwordIcon, setPasswordIcon] = useState('fi-rr-eye')

    const changePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
            setPasswordIcon('fi-rr-eye-crossed');
        } else {
            setPasswordType('password')
            setPasswordIcon('fi-rr-eye');
        }
    }

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formdata.name === '') {
            toast.error('Name is required')
        } else if (formdata.email === '') {
            toast.error('Email is required')
        } else if (!emailRegex.test(formdata.email)) {
            toast.error('Email is invalid')
        } else if (formdata.password === '') {
            toast.error('Password is required')
        } else {
            setLoading(true);

            try {
                const response = await axios.post('http://localhost:4000/api/auth/signup', formdata, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true});

                if (response.status === 201) {
                    toast.success(response.data.message)
                    setLoading(false);
                    setFormdata({
                        name: '',
                        email: '',
                        password: ''
                    })
                    login(response.data.user);

                    navigate('/');
                }

                if (response.status === 400) {
                    toast.error(response.data.message)
                }

            } catch (err) {
                toast.error(err)
            }


        }
    }


    return (
        <>
            <Toaster />
            <div className="account-wrapper">

                <div className="account-box">

                    <form onSubmit={handleSubmit} className="form-area">

                        <h2>
                            Welcome To Pinterest 👋!
                        </h2>
                        <p>
                            connect with us.
                        </p>

                        <label>Name</label>
                        <div className="input-field">
                            <input
                                type="text"
                                name='name'
                                id='name'
                                value={formdata.name}
                                onChange={handleChange}
                            />
                            <i className="fi fi-rr-user"></i>
                        </div>


                        <label>Email Address</label>
                        <div className="input-field">
                            <input
                                type="email"
                                name='email'
                                id='email'
                                value={formdata.email}
                                onChange={handleChange}
                            />
                            <i className="fi fi-rr-at"></i>
                        </div>

                        <label>Password</label>
                        <div className="input-field">
                            <input
                                type={passwordType}
                                name='password'
                                id='password'
                                value={formdata.password}
                                onChange={handleChange}
                            />
                            <i className={`fi ${passwordIcon}`} onClick={changePassword}></i>
                        </div>

                        {loading ? <button> Register <i className="fi fi-rr-loading"></i></button> : <button> Register </button>}



                        <p className="info">
                            Already have an account <Link to="/login">Login  Here</Link>
                        </p>

                    </form>

                    <div className="image-area">
                        <img src="https://i.pinimg.com/736x/d8/a0/25/d8a0251803ec6c9cd28901caeeaec8f3.jpg" alt="" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Signup