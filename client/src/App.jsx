import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import InnerPage from './components/InnerPage/InnerPage';
import Dashboard from './pages/Dashboard/Dashboard'
import Profile from './pages/Profile/Profile'
import NewPost from './pages/NewPost/NewPost'
import Post from './pages/Post/Post'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<ProtectRoute><InnerPage><Dashboard /></InnerPage></ProtectRoute>} />
            <Route path="/profile" element={<ProtectRoute><InnerPage><Profile /></InnerPage></ProtectRoute>} />
            <Route path="/new" element={<ProtectRoute><InnerPage><NewPost /></InnerPage></ProtectRoute>} />
            <Route path="/post/:id" element={<ProtectRoute><InnerPage><Post /></InnerPage></ProtectRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
