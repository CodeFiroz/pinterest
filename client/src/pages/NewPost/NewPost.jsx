import './NewPost.css';
import { useState } from 'react';
import axios from "axios";

const NewPost = () => {
  const [image, setImage] = useState("https://placehold.co/400x200?font=Poppins&text=Upload+Image");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Validate file type (allowing only images)
      if (!selectedFile.type.startsWith("image/")) {
        setError("Only image files are allowed!");
        setImage("https://placehold.co/400x200?font=Poppins&text=Upload+Image");
        return;
      }

      // Validate file size (max 2MB)
      if (selectedFile.size > 2 * 1024 * 1024) {
        setError("File size should be less than 2MB!");
        setImage("https://placehold.co/400x200?font=Poppins&text=Upload+Image");
        return;
      }

      setError("");
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("file", file);

    try {
      const response = await axios.post('http://localhost:4000/api/post/publish', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      });

      if (response.status === 200) {
        alert("Post Created Successfully!");
        console.log(response.data);
      } else {
        alert(response.data.message || "Error");
        console.log(response.data);
      }

    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
      console.log(err);
    }
  };

  return (
    <div className="newpostContainer">
      <div className="postHeader">
        <h4>Create Pin</h4>
        <button onClick={handleSubmit}>Publish</button>
      </div>

      <div className="new-post">
        <div className="pictureSection">
          <label htmlFor="file">
            <img src={image} alt="Preview" />
            <p className='error'>{error}</p>
          </label>
          <input type="file" id="file" onChange={handleFileChange} hidden />
        </div>

        <div className="infoSection">
          <input 
            type="text" 
            placeholder='Add A Title' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea 
            placeholder='Add a detailed description' 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
