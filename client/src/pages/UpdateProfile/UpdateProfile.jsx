import './UpdateProfile.css'
import useAuthStore from '../../store/authStore'
import { useState } from "react"
import { UpdateProfileInfo } from '../../api/auth'
import { useNavigate } from "react-router-dom"

const UpdateProfile = () => {

    const navigate = useNavigate();

    const { user, Setlogin } = useAuthStore();
    const [loading, setLoading] = useState(false);



    const [error, setError] = useState("");
    const nameRegex = /^[a-zA-Z\s'-]+$/;

    const [formdata, setFormData] = useState({
        name: user.name,
        bio: user.bio,
        pfp: null,
        cover: null
    });

    const [pic, setPic] = useState(null)
    const [cover, setCover] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value,
        })
    }

    const handleFileChange = (e, file) => {

        setError("");

        const uploadFile = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            if (file === "pfp") {
                setPic(reader.result);
            } else if (file === "cover") {
                setCover(reader.result)
            }
        }

        reader.readAsDataURL(uploadFile);


        if (uploadFile.type.split('/')[0] !== "image") {
            setError("unsupported file.");
            return false;
        } else if (uploadFile.size > 5000000) {
            setError("large file maximum 5mb");
            return false;
        }

        setFormData({
            ...formdata,
            [file]: uploadFile
        });
    }

    const validateForm = () => {
        setError("");
        if (formdata.name == "") {
            setError("Please enter a name.")
            return false;
        } else if (formdata.name.length < 2) {
            setError("Please enter a valid name.")
            return false
        } else if (!nameRegex.test(formdata.name)) {
            setError("Invalid name syntax.")
            return false
        } else {
            return true;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        console.log(formdata);
        

        if (!validateForm()) {
            setLoading(false);
            return false;

        }

        const response = await UpdateProfileInfo(formdata);

        if (response.success) {
            Setlogin(response.user);
            navigate('/');
            setLoading(false);

        } else {
            setError(response.error)
            setLoading(false);

        }


    }

    return (
        <>
            <div className="container">

                <form onSubmit={handleSubmit} encType='multipart/form-data' className="create-pin-wrapper">

                    <div className="cover-image">
                        <input
                            type="file"
                            name="cover"
                            id="cover"
                            hidden
                            onChange={(e) => handleFileChange(e, "cover")}
                        />
                        <label htmlFor="cover">
                            <img src={cover == null ? user.cover : cover} alt="" />
                            <div className="cover-icon">
                                <i className="bi bi-pen-fill"></i>
                            </div>
                        </label>



                        {error !== "" ? <p className="error">{error}</p> : ''}


                    </div>
                    <div className="pin-details">



                        <div className="pic-div">

                            <input
                                type="file"
                                name="pfp"
                                id="pfp"
                                onChange={(e) => handleFileChange(e, "pfp")}
                                hidden
                            />
                            <label htmlFor="pfp">
                                <div className="pic-upload">
                                    <i className="bi bi-pencil-fill"></i>
                                    <img src={pic == null ? user.pfp : pic} alt="" />
                                </div>
                            </label>

                        </div>

                        <div className="input">
                            <input
                                type="text"
                                name='username'
                                id='username'
                                value={`@${user.username}`}
                                readOnly
                            />
                            <label htmlFor="username">Username</label>

                        </div>


                        <div className="input">
                            <input
                                type="text"
                                name='name'
                                id='name'
                                value={formdata.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="name">Name</label>

                        </div>


                        <div className="input">
                            <textarea
                                name="bio"
                                id="bio"
                                value={formdata.bio}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="bio">Profile Bio</label>

                        </div>

                        {
                            loading ? <button disabled>Updating Profile...</button> : <button>Update Profile</button>
                        }

                      

                    </div>

                </form>

            </div>

        </>
    )
}

export default UpdateProfile
