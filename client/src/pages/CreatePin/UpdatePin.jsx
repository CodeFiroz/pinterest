import './CreatePin.css'
import useAuthStore from "../../store/authStore"
import { useState, useEffect } from 'react';
import { getPinDetails, updatePin } from '../../api/pins';
import { useNavigate,useParams } from 'react-router-dom';

const UpdatePin = () => {

    const navigate = useNavigate();
    const { pinId } = useParams();

    const [formdata, setFormData] = useState({
        title: "",
        description: ""
    })

    const [pin, setPin] = useState({});

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    
        useEffect(() => {
            const pinInfo = async () => {
                try {
                    const response = await getPinDetails(pinId);
                    if (!response.success) {
                        navigate('/404');
                        return false;
                    }
    
                    setPin(response.pin);
                    setFormData({
                        title: response.pin.title,
                        description: response.pin.description
                    })
    
                } catch (error) {
                    console.error("Error fetching pin details:", error);
                }
            };
            pinInfo();
    
    
        }, [pinId, navigate]);
    

    const { user } = useAuthStore();

    const handleChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }


    const validateForm = ()=>{
        setError("");
    if(formdata.title == ""){
        setError("Please add a title")
        return false;
    }else{
        return true;
    }

}
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        console.log(formdata);
        
        
        if(!validateForm()){
            setLoading(false)
            return false;
        }

        const response = await updatePin(pinId, formdata);

        if(!response.success){
            setError(response.error);
            setLoading(false);
        }else{
            navigate(`/pin/${pinId}`)
        }


        

    }

    return (
        <>

           
            <div className="container">

                <form onSubmit={handleSubmit} encType='multipart/form-data' className="create-pin-wrapper">

                    <div className="upload-pin">
                            <img
                                src={pin.image}
                                alt=""
                            />
                       
                        {error == "" ? '' : <p className="error">{error}</p>}




                    </div>
                    <div className="pin-details">

                        <div className="user-info">
                            <img src={user.pfp} alt="" />
                            <p>
                                {user.name}
                            </p>



                        </div>

                        <div className="input">
                            <input
                                type="text"
                                name='title'
                                id='title'
                                value={formdata.title}
                                onChange={handleChange}
                            />
                            <label htmlFor="title">Update title *</label>

                        </div>

                        <div className="input">
                            <textarea
                                name="description"
                                id="description"
                                value={formdata.description}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="description">Update description</label>

                        </div>

                        {
                            loading ? <button disabled>Updating...</button> : <button>Update Pin</button>
                        }




                    </div>

                </form>

            </div>

        </>
    )
}

export default UpdatePin