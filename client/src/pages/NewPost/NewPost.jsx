import './NewPost.css';
import { useState } from 'react';

const NewPost = () => {

    const [image, setImage] = useState("https://placehold.co/400x200?font=Poppins?text=Upload+Image");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Validate file type (allowing only images)
      if (!file.type.startsWith("image/")) {
        setError("Only image files are allowed!");
        setImage("https://placehold.co/400x200?font=Poppins?text=Upload+Image");
        return;
      }

      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setError("File size should be less than 2MB!");
        setImage("https://placehold.co/400x200?font=Poppins?text=Upload+Image");
        return;
      }

      setError("");
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);

      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setError("");
  };


  return (
    <div className="newpostContainer">

        <div className="postHeader">

    <h4>
        Create Pin
    </h4>

    <button>
        Publish
    </button>

        </div>

        <div className="new-post">


        <div className="pictureSection">

            <label htmlFor="file">
                <img src={image} alt="" />
                <p className='error'>
                    {error}
                </p>
            </label>
            <input type="file" name='file' id='file' onChange={handleFileChange} hidden />

        </div>
        <div className="infoSection">

            <input type="text" placeholder='Add A Title' />
            <input type="text" placeholder='Link' />
            <textarea name="desc" id="desc" placeholder='Add a detaiiled description'></textarea>
            
        </div>

        </div>

    </div>
  )
}

export default NewPost