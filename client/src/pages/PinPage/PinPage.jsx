import './PinPage.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { getPinDetails } from '../../api/pins';
<<<<<<< HEAD
import useAuthStore from '../../store/authStore'
=======
import useAuthStore from '../../store/authStore';
>>>>>>> e3bee83f809e977ea3e449a3b8ee485abc7948f7

const PinPage = () => {

    const [lighbox, setLightBox] = useState(false);

    const { user } = useAuthStore();
<<<<<<< HEAD
        
        const [pin, setPin] = useState({});
        const navigate = useNavigate();
        const { pinId } = useParams();
=======
>>>>>>> e3bee83f809e977ea3e449a3b8ee485abc7948f7
    
        useEffect(() => {
            const pinInfo = async () => {
                try {
                    const response = await getPinDetails(pinId);
    
                    if (!response.success) {
                        // navigate('/404');
                        return;
                    }
    
                    setPin(response.pin);
                } catch (error) {
                    console.error("Error fetching pin details:", error);
                    // navigate('/404');
                }
            };
    
<<<<<<< HEAD
            if (pinId) {
                pinInfo();
            }
        }, [pinId, navigate]); // Add dependencies to ensure proper re-fetching
        
        
        
=======
    const deletePin = async ()=>{
        const response = await deletePin(pinId);

                if (!response.success) {
                    alert(response.error);
                    return;
                }else{
                    navigate('/');
                }
    }

>>>>>>> e3bee83f809e977ea3e449a3b8ee485abc7948f7
    

    return (
        <>
            <div className="pin__wrapper">

                <div className="pin_image">
                    <img src={pin.image} alt="" />
                    <a className="zoom" onClick={()=> setLightBox(true)}>
                        <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                </div>

                <div className="pin-data">

                    <div className='pin_post_header'>
                        <div className="pin_header">

                            <div className="action_menu">
                                <div>
                                    <button title="Like Pin"><i className="bi bi-heart"></i></button>
                                    <span>24</span>
                                </div>

                                <div>
                                    <button title="Download Pin">
                                        <i className="bi bi-download"></i>
                                    </button>
                                </div>

<<<<<<< HEAD
                            </div>
=======
                        {
                            user.id == pin.creator?._id ? <div className="author-menu">
                            <button>
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button onClick={deletePin}>
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </div> : ''
                        }

                        
                    </div>
>>>>>>> e3bee83f809e977ea3e449a3b8ee485abc7948f7

                            <div className='right_menu'>

                                <a href="#">
                                    <img src={pin.creator?.pfp} alt={pin.creator?.name} title={pin.creator?.name} />
                                </a>

                                <button className="save-btn saved">
                                    Saved <i className="bi bi-pin-angle"></i>
                                </button>
                            </div>

                        </div>

                        <h4>
                            {pin.title}
                        </h4>
                        <p>
                            {pin.description}
                        </p>
<<<<<<< HEAD
=======

                        <div className="post-action">

                            <button className='like'>
                                <i className="bi bi-heart"></i>
                                <span>Like</span>
                            </button>

                            <button className='save'>
                                <i className="bi bi-bookmark"></i>
                                <span>Save pin</span>
                            </button>

                            <a href={pin.image} className='download' target='_blank' download>
                                <i className="bi bi-download"></i>
                                <span>Download</span>
                            </a>

                        </div>


>>>>>>> e3bee83f809e977ea3e449a3b8ee485abc7948f7
                    </div>

                    {
                        user.id == pin.creator?._id ? <div className="admin-menu">

                        <button>
                            Delete Pin <i className="bi bi-trash-fill"></i>
                        </button>

                        <button>
                            Edit Pin <i className="bi bi-pen-fill"></i>
                        </button>


                    </div> : ''
                    }

                    


                </div>

            </div>

            <div className={lighbox ? 'enlarge-image active' : 'enlarge-image'} >

                <div className="close-icon" onClick={()=> setLightBox(false)}>
                    <i className="bi bi-x-lg"></i>
                </div>

                <img src={pin.image} alt="" />

            </div>

        </>
    )
}

export default PinPage