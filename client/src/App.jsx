import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import InnerPage from './components/InnerPage/InnerPage';
import Dashboard from './pages/Dashboard/Dashboard'
import Profile from './pages/Profile/Profile'
import NewPost from './pages/NewPost/NewPost'
import Post from './pages/Post/Post'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<InnerPage><Dashboard /></InnerPage>} />
            <Route path="/profile" element={<InnerPage><Profile /></InnerPage>} />
            <Route path="/new" element={<InnerPage><NewPost /></InnerPage>} />
            <Route path="/post:id" element={<InnerPage><Post /></InnerPage>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
