import './PinPage.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom"
import { getPinDetails, deletePin, LikePin, savePin } from '../../api/pins';
import useAuthStore from '../../store/authStore'
import Loader from '../../components/Loader/Loader';

const PinPage = () => {

    const navigate = useNavigate();
    const { pinId } = useParams();

    const { user } = useAuthStore();
    const userId = user.id;

    const [loading, setLoading] = useState(true);
    const [pin, setPin] = useState({});
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [lightbox, setLightBox] = useState(false);


    useEffect(() => {
        const pinInfo = async () => {
            try {
                const response = await getPinDetails(pinId);
                if (!response.success) {
                    navigate('/404');
                    return false;
                }

                setPin(response.pin);
                setLikes(pin.likes?.length);
                setLiked(pin.likes?.includes(userId))
                setSaved(pin.saved?.includes(userId))
                setLoading(false)

            } catch (error) {
                console.error("Error fetching pin details:", error);
            }
        };
        pinInfo();


    }, [pinId, navigate, userId, pin.likes, pin.saved]);



    const handleDelete = async () => {
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

    const handleLike = async () => {
        const LikedResponse = await LikePin(pinId);

        if (!LikedResponse.success) {
            alert("Oops");
        } else {
            setLiked(!liked)
            setLikes(liked ? likes - 1 : likes + 1)
        }
    };

    const handleSaved = async () => {
        const SaveResponse = await savePin(pinId);

        if (!SaveResponse.success) {
            alert("Oops");
        } else {
            setSaved(!liked)
        }
    };


    
    

    return (
   
        <>
        
        {
            loading ? ( <Loader /> ) :
            (
                <>
                <div className="pin__wrapper">
              
              <div className="pin_image">
                  <img src={pin.image} alt="" />
                  <a className="zoom" onClick={() => setLightBox(true)}>
                      <i className="bi bi-arrows-angle-expand"></i>
                  </a>
              </div>
              
              <div className="pin-data">
              
                  <div className='pin_post_header'>
                      <div className="pin_header">
              
                          <div className="action_menu">
                              <div onClick={handleLike}>
                                  <button className={liked ? 'like' : ''}>
                                      <i className="bi bi-heart"></i>
                                  </button>
                                  <span>{likes}</span>
                              </div>
              
                              <div>
                                  <a
                                      href={pin.image}
                                      download={pin.image} // Extract filename
                                      title="Download Pin"
                                  >
                                      <i className="bi bi-download"></i>
                                  </a>
                              </div>
              
                          </div>
              
                          <div className='right_menu'>
              
                              <a href={`/${pin.creator?.username}`}>
                                  <img src={pin.creator?.pfp} alt={pin.creator?.name} title={pin.creator?.name} />
                              </a>
              
                              <button onClick={handleSaved} className={`save-btn ${saved ? 'saved' : ''}`}>
                                  {saved ? <>Saved <i className="bi bi-bookmark-fill"></i></> : <>Save <i className="bi bi-pin-angle"></i>    </>}
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
              
                          <button onClick={handleDelete}>
                              Delete Pin <i className="bi bi-trash-fill"></i>
                          </button>
              
                          <Link to={`/edit/${pin._id}`} >
                              Edit Pin <i className="bi bi-pen-fill"></i>
                          </Link>
              
              
                      </div> : ''
                  }
              
              
              
              
              </div>
              
              </div>
              
              <div className={lightbox ? 'enlarge-image active' : 'enlarge-image'} >
              
              <div className="close-icon" onClick={() => setLightBox(false)}>
                  <i className="bi bi-x-lg"></i>
              </div>
              
              <img src={pin.image} alt={pin.title} />
              
              </div>
                        </>
            )

        }
        
        </>

        
    )
}

export default PinPage