import './CreatePin.css'
import useAuthStore from "../../store/authStore"
import { useState } from 'react';
import { newPin } from '../../api/pins';
import { useNavigate } from 'react-router-dom';

const CreatePin = () => {

    const navigate = useNavigate();

    const [formdata, setFormData] = useState({
        pin: null,
        title: "",
        description: ""
    })


    const [pin, setPin] = useState(null)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { user } = useAuthStore();

    const handleChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleFile = (e) => {
        setError("");

        const pinImage = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPin(reader.result)
        }

        reader.readAsDataURL(pinImage)


        if (pinImage.type.split('/')[0] !== "image") {
            setError("unsupported file.");
            return false;
        } else if (pinImage.size > 5000000) {
            setError("large file maximum 5mb");
            return false;
        } else {
            setFormData({
                ...formdata,
                pin: pinImage
            })

        }



    }

    const validateForm = ()=>{
        setError("");
        if(formdata.pin == null){
            setError("Please upload an image")
            return false;
    }else if(formdata.title == ""){
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

        const response = await newPin(formdata);

        if(!response.success){
            setError(response.error);
            setLoading(false);
        }else{
            navigate(`/pin/${response.pinId}`)
        }


        

    }

    return (
        <>

           
            <div className="container">

                <form onSubmit={handleSubmit} encType='multipart/form-data' className="create-pin-wrapper">

                    <div className="upload-pin">
                        <input
                            type="file"
                            name="pin"
                            id="pin"
                            accept='image/*'
                            onChange={handleFile}
                            hidden
                        />
                        <label htmlFor="pin">

                            <img
                                src={pin == null ? 'https://i.pinimg.com/736x/7b/b8/df/7bb8df771efa01485f3dc78867de704a.jpg' : pin}
                                alt=""
                            />
                        </label>

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
                            <label htmlFor="title">Add a title *</label>

                        </div>

                        <div className="input">
                            <textarea
                                name="description"
                                id="description"
                                value={formdata.description}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="description">Add a description</label>

                        </div>

                        {
                            loading ? <button disabled>Publishing...</button> : <button>Publish Pin</button>
                        }




                    </div>

                </form>

            </div>

        </>
    )
}

export default CreatePin