import Header from "./components/Header/Header"
import CreatePin from "./pages/CreatePin/CreatePin"
import Home from "./pages/Home/Home"
import PinPage from "./pages/PinPage/PinPage"
import Profile from "./pages/Profile/Profile"
import SavedPin from "./pages/SavedPin/SavedPin"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignIn/Signup"
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>

    <Router>
     <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/new" element={<CreatePin />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="/saved" element={<SavedPin />} />
        <Route path="/pin/:id" element={<PinPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

    </Router>
     

    </>
  )
}

export default App
