import './Profile.css';
import { useState } from 'react';
import MyPins from '../MyPins/MyPins';
import NewPost from '../NewPost/NewPost';
import useAuthStore from '../../store/authStore';

const Profile = () => {

    const { authUser } = useAuthStore();
    const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "My Pins", content: <MyPins /> },
    { id: "tab2", label: "Saved", content: "This is the About section." },
    { id: "tab3", label: "New Pin", content: <NewPost /> },
  ];

  return (
    <div className="profile">

        <div className="profileInfo">

            <img src={authUser.pic} alt="" />
            <h4>{authUser.name}</h4>
            <p>
                {authUser.email}
            </p>
          
            <a href="#"> Logout</a>

        </div>

 
      <div className='tabs'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` ${
              activeTab === tab.id
                ? "active"
                : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>


      <div>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} >
                {tab.content}
              </div>
            )
        )}
      </div>
 

    </div>
  )
}

export default Profile