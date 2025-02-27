import './CreatePin.css'

const CreatePin = () => {
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
                        <img src="https://i.pinimg.com/736x/bf/1c/bb/bf1cbb9a00723bfe5e0a13ba021e8902.jpg" alt="" />
                        <p>
                            Sarcastic Firoz 
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