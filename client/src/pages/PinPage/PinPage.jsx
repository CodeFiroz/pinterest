import './PinPage.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { getPinDetails, deletePin, LikePin} from '../../api/pins';
import useAuthStore from '../../store/authStore'


const PinPage = () => {

    const [lighbox, setLightBox] = useState(false);

    const { user } = useAuthStore();

    const navigate = useNavigate();
        
        const [pin, setPin] = useState({});
        const { pinId } = useParams();
    
        useEffect(() => {
            const pinInfo = async () => {
                try {
                    const response = await getPinDetails(pinId);
    
                    if (!response.success) {
                        navigate('/404');
                        return false;
                    }
    
                    setPin(response.pin);
                } catch (error) {
                    console.error("Error fetching pin details:", error);
                    navigate('/404');
                }
            };
    
           
                pinInfo();
        }, [pinId, navigate]); // Add dependencies to ensure proper re-fetching
        
        
    
        const LikedPin = async () => {
            const LikedResponse = await LikePin(pinId);
            
            if (!LikedResponse.success) {
                alert(LikedResponse.error);
            } else {
                setPin((prevPin) => ({
                    ...prevPin,
                    likes: prevPin.likes.includes(user.id)
                        ? prevPin.likes.filter((id) => id !== user.id) // Unlike
                        : [...prevPin.likes, user.id], // Like
                }));
            }
        };
        
        const DeletePin = async () => {
            const confirmDel = window.confirm("Do you want to delete this pin?");
            if (confirmDel) {
                const DeleteResponse = await deletePin(pinId);
        
                if (!DeleteResponse.success) {
                    alert(DeleteResponse.error);
                } else {
                    alert("Deleted");
                    navigate("/");
                }
            }
        };
        


    



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
                            <div onClick={() => LikedPin()}>  {/* ✅ Fixed function reference */}
    <button 
        title="Like Pin" 
        className={pin.likes?.includes(user?.id) ? 'like' : ''}
    >
        <i className="bi bi-heart"></i>
    </button>
    <span>{pin.likes?.length || 0}</span> {/* ✅ Shows like count */}
</div>

                                <div>
                                    <button title="Download Pin">
                                        <i className="bi bi-download"></i>
                                    </button>
                                </div>

                            </div>

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
                    </div>

                    {
                        user.id == pin.creator?._id ? <div className="admin-menu">

                        <button onClick={DeletePin}>
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