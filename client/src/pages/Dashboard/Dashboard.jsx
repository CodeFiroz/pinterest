import { useState, useEffect } from 'react'
import './Dashboard.css'
import axios from "axios"

const Dashboard = () => {

  const [pins, setPins] = useState({});

  const fetchPost = async () => {
    try {
        const response = await axios.post('http://localhost:4000/api/post/post', { 
            withCredentials: true 
        });

        if (response.status === 200) {
            setPins(response.data.posts);
            console.log(response.data);
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

console.log(pins);

      

     
        

  return (
    <div className="feed">

       
{pins && pins.length > 0 ? (
    pins.map((pin) => (
        <div className="feedPost" key={pin._id}>
            <a href="#">
                <img src={pin.image.startsWith("http") ? pin.image : `http://localhost:4000/${pin.image}`} alt="Post Image" />
            </a>
        </div>
    ))
) : (
    <p>No posts available</p>
)}


      

    </div>
  )
}

export default Dashboard