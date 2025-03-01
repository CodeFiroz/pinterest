import './CreatePin.css'
import useAuthStore from "../../store/authStore"

const CreatePin = () => {

    const { user } = useAuthStore();

  return (
    <>

        <div className="container">

            <div className="create-pin-wrapper">

                <div className="upload-pin">
                    <input type="file" name="pin" id="pin" hidden />
                    <label htmlFor="pin">
                        <img src="https://i.pinimg.com/736x/7b/b8/df/7bb8df771efa01485f3dc78867de704a.jpg" alt="" />
                    </label>

                    <p className="errors">

                    </p>

                </div>
                <div className="pin-details">

                    <div className="user-info">
                        <img src={user.pfp} alt="" />
                        <p>
                            {user.name}
                        </p>

                      

                    </div>

                    <div className="input">
                            <input type="text" name='title' id='title' />
                            <label htmlFor="title">Add a title</label>

                    </div>

                    <div className="input">
                            <textarea name="description" id="description"></textarea>
                            <label htmlFor="description">Add a description</label>

                    </div>

                    <button>
                        Publish Pin
                    </button>


                </div>

            </div>
            
        </div>

    </>
  )
}

export default CreatePin