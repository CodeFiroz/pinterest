import './About.css'

const About = () => {
  return (
    <div className='container about_page'>
      
      <div>
      <h1>
      Pinterest Clone 📌
      </h1>

      <h4>
      Introduction
      </h4>
      <p>
      Welcome to Pinterest Clone, a modern and feature-rich web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Inspired by Pinterest, this project provides users with an interactive platform to discover, create, save, and manage visual content. Whether you're a designer, artist, or content enthusiast, this platform lets you organize and share inspiration effortlessly.


      </p>

      </div>


<div>
    <h4>
    About the Project
    </h4>
    <p>
    This Pinterest Clone is designed to deliver an intuitive and visually appealing experience, enabling users to upload, update, and manage their pins with ease. The project implements a secure authentication system and ensures smooth performance with an optimized backend and responsive front end.


    </p>

    <h4>
    Tech Stack Used:
    </h4>
    <ul>
        <li>
            ✅ Frontend: React.js (with Hooks & zustand)
        </li>
        <li>
            ✅ Backend: Node.js, Express.js
        </li>
        <li>
            ✅ Database: MongoDB with Mongoose ORM
        </li>
        <li>
            ✅ Authentication: JWT (JSON Web Token) & bcrypt for secure login
        </li>
    </ul>

</div>

<div>
    <h4>
    Key Features
    </h4>
    <ul>
        <li>
            🧩 User Authentication – Secure login & signup using JWT
        </li>
        <li>
            🧩 Create & Upload Pins – Easily upload and organize your images
        </li>
        <li>
            🧩  Edit & Delete Pins – Modify or remove your posts anytime
        </li>
        <li>
            🧩 Responsive Design – Works smoothly on all devices
        </li>
        <li>
            🧩  Optimized Backend – Fast API responses & database queries
        </li>
        <li>
            🧩 Engaging UI – Aesthetic and interactive interface
        </li>
    </ul>
</div>


<div>
    <h3>
    About Me
    </h3>
    <p>
    Hi, I'm Firoz, a passionate web developer with expertise in MERN stack, WordPress, and front-end technologies. I love building real-world applications that enhance user experience and solve practical problems. With a deep interest in UI/UX and performance optimization, I strive to create impactful digital solutions.
    </p>

    <h4>
    Contact & Links
    </h4>

    <ul className="contact">
        <li>
            <a href="mailto:khanfiroz4045@gmail.com" style={{'--i': 'rgb(88, 173, 233)'}}>
                <i className="bi bi-envelope"></i>
                <span>
                    khanfiroz4045@gmail.com
                </span>
            </a>
        </li>
        <li>
        <a href="https://github.com/CodeFiroz" target='_blank' style={{'--i': 'rgb(0, 0, 0)'}}>
                <i className="bi bi-github"></i>
                <span>
                    github.com/CodeFiroz
                </span>
            </a>
        </li>
        <li>
        <a href="https://www.instagram.com/sarcastic.firoz/" target='_blank' style={{'--i': 'rgb(233, 88, 228)'}}>
                <i className="bi bi-instagram"></i>
                <span>
                    @sarcastic.firoz
                </span>
            </a>
        </li>
    </ul>
</div>


    </div>
  )
}

export default About
