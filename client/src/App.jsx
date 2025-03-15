import { useEffect } from "react"

import Header from "./components/Header/Header"
import CreatePin from "./pages/CreatePin/CreatePin"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import PinPage from "./pages/PinPage/PinPage"
import Profile from "./pages/Profile/Profile"
import SavedPin from "./pages/SavedPin/SavedPin"
import ForgotPassword from "./pages/SignIn/ForgotPassword"
import ResetPassword from "./pages/SignIn/ResetPassword"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignIn/Signup"
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile"
import ProtectRoute from "./components/ProtectRoute/ProtectRoute"
import AuthPage from "./components/AuthPage/AuthPage"
import { verify } from "./api/auth"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import useAuthStore from "./store/authStore"

function App() {
  const { isAuthenticated, user, logoutUser, Setlogin } = useAuthStore();



  useEffect(() => {
   const verifyUser = async()=>{
      const response = await verify();
      
     if(!response.success){
      logoutUser();
     }

   }

   verifyUser();

}, [logoutUser])


  return (
    <>

      <Router>

        {
          isAuthenticated ? <Header /> : ''
        }


        <Routes>
          <Route path="/" element={<ProtectRoute><Home /></ProtectRoute>} />
          {/* {
            isAuthenticated ? <Route path={`/${user.username}`} element={<ProtectRoute><Profile /></ProtectRoute>} /> : ''
          } */}

          <Route path="/new" element={<ProtectRoute><CreatePin /></ProtectRoute>} />
          <Route path="/update" element={<ProtectRoute><UpdateProfile /></ProtectRoute>} />
          <Route path="/saved" element={<ProtectRoute><SavedPin /></ProtectRoute>} />
          <Route path="/pin/:pinId" element={<ProtectRoute><PinPage /></ProtectRoute>} />
          <Route path="/sign-in" element={<AuthPage><SignIn /></AuthPage>} />
          <Route path="/sign-up" element={<AuthPage><SignUp /></AuthPage>} />
          <Route path="/forgot-password" element={<AuthPage><ForgotPassword /></AuthPage>} />
          <Route path="/reset-password/:token" element={<AuthPage><ResetPassword /></AuthPage>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>


    </>
  )
}

export default App
