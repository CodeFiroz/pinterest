import { useEffect, useState } from 'react';
import './PinPage.css'
import { useNavigate, useParams } from "react-router-dom"
import { getPinDetails } from '../../api/pins';

const PinPage = () => {



    
    const [pin, setPin] = useState({});
    const navigate = useNavigate();
    const { pinId } = useParams();

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

        if (pinId) {
            pinInfo();
        }
    }, [pinId, navigate]); // Add dependencies to ensure proper re-fetching
    

    

    return (
        <>

            <div className="container">

                <div className="pin-page">

                    <div className="pin-image">


                        <img src={pin.image} alt="" />

                        <div className="author-menu">
                            <button>
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button>
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>





                    <div className="pin-info">
                        <div className="user-info">
                            <img src={pin.creator?.pfp} alt="" />
                            <p>
                                {
                                    pin.creator?.name
                                }
                            </p>
                        </div>

                        <h3>

                            {pin.title}
                        </h3>
                        <p className='description'>
                            {
                                pin.description
                            }
                        </p>

                        <div className="post-action">

                            <button className='like'>
                                <i className="bi bi-heart"></i>
                                <span>Like</span>
                            </button>

                            <button className='save'>
                                <i className="bi bi-bookmark"></i>
                                <span>Save pin</span>
                            </button>

                            <button className='download'>
                                <i className="bi bi-download"></i>
                                <span>Download</span>
                            </button>

                        </div>


                    </div>


                </div>


            </div>

        </>
    )
}

export default PinPage