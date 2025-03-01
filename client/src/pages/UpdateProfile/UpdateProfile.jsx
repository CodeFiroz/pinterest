import './UpdateProfile.css'
import useAuthStore from '../../store/authStore'

const UpdateProfile = () => {

    const { user } = useAuthStore()

  return (
    <>
    <div className="container">

<div className="create-pin-wrapper">

    <div className="cover-image">
        <input type="file" name="cover" id="cover" hidden />
            <label htmlFor="cover"><img src={user.cover} alt="" /></label>
        

        <p className="errors">

        </p>

    </div>
    <div className="pin-details">



        <div className="pic-div">

            <input type="file" name="pic" id="pic" hidden/>
            <label htmlFor="pic">
                <div className="pic-upload">
                    <i className="bi bi-pencil-fill"></i>
                    <img src={user.pfp} alt="" />
                </div>
            </label>

        </div>

        <div className="input">
                <input type="text" name='name' id='name' value="Firoz Ansari" readOnly/>
                <label htmlFor="name">Name</label>

        </div>

        <div className="input">
                <input type="text" name='username' id='username' value="@sarcastic.firoz" readOnly/>
                <label htmlFor="username">Username</label>

        </div>

        <div className="input">
                <textarea name="description" id="description"></textarea>
                <label htmlFor="description">Profile Bio</label>

        </div>

        <button>
            Update Profile
        </button>


    </div>

</div>

</div>
      
    </>
  )
}

export default UpdateProfile
