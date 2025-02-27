import './UpdateProfile.css'

const UpdateProfile = () => {
  return (
    <>
    <div className="container">

<div className="create-pin-wrapper">

    <div className="cover-image">
        <input type="file" name="cover" id="cover" hidden />
            <label htmlFor="cover"><img src="https://i.pinimg.com/736x/7b/b8/df/7bb8df771efa01485f3dc78867de704a.jpg" alt="" /></label>
        

        <p className="errors">

        </p>

    </div>
    <div className="pin-details">



        <div className="pic-div">

            <input type="file" name="pic" id="pic" hidden/>
            <label htmlFor="pic">
                <div className="pic-upload">
                    <i className="bi bi-pencil-fill"></i>
                    <img src="https://i.pinimg.com/736x/bf/1c/bb/bf1cbb9a00723bfe5e0a13ba021e8902.jpg" alt="" />
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
