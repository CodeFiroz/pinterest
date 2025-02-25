import './Post.css';
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {

    const {id} = useParams();

    const [pin, setPin] = useState({});

    const fetchPost = async () => {
      try {
          const response = await axios.post(`http://localhost:4000/api/post/getpost/${id}`, { 
              withCredentials: true 
          });
  
          if (response.status === 200) {
              setPin(response.data.post);
          } else {
              alert('Something went wrong');
          }
      } catch (err) {
          alert(err.response?.data?.message || 'Something went wrong');
          console.error("Error fetching posts:", err);
      }
  };
  
  useEffect(() => {
      fetchPost();
  }, []);
  

  return (
    <>

    <div className="postContainer">

    <div className="backBtn">
        <i className="fi fi-rr-arrow-left"></i>
    </div>

        <div className="post">

            <div className="post-image">
                <img src={pin.image} alt="" />
            </div>
            <div className="post-info">

                <div className="post-action">

                    <div>
                    <button className='like'>
                        <i className="fi fi-rr-heart"></i> 109
                    </button>

                    <button className='download'>
                        <i className="fi fi-rr-download"></i> Download
                    </button>
                    </div>

                    <button className='save'>
                        Save
                    </button>

                </div>


                <div className="author">
                <img src={pin.author?.pic} alt="" />
                <p>
                    {pin.author?.name}
                </p>
            </div>

                <h3>
                {pin.title}
                </h3>
                <p className='desc'>
                {pin.description}
                </p>

          
            </div>

            


        </div>

    </div>

    </>
  )
}

export default Post