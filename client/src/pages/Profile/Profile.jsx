import './Profile.css';
import { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import NewPost from '../NewPost/NewPost';

const Profile = () => {

    const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "My Pins", content: <Dashboard /> },
    { id: "tab2", label: "Saved", content: "This is the About section." },
    { id: "tab3", label: "New Pin", content: <NewPost /> },
  ];

  return (
    <div className="profile">

        <div className="profileInfo">

            <img src="https://i.pinimg.com/280x280_RS/94/a9/df/94a9df645c7364d82763b82034427586.jpg" alt="" />
            <h4>Firoz</h4>
            <p>
                @sarcastic.firoz
            </p>
            <a href="#">Edit Profile</a>

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