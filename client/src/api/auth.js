import axios from "axios"



const axiosLink = "http://localhost:3000/api/auth";

export const Signup = async (formdata)=>{
   
    try{
        const response = await axios.post(
           `${axiosLink}/signup`, 
            formdata, 
            {
                withCredentials: true
            }
         )

         if (response.status !== 201){
            return {
                success: false,
                error: response.data.message
            }
         }

       
         return {
            success: true,
            user: response.data.user
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const Signin = async (formdata)=>{
    try{
        const response = await axios.post(
           `${axiosLink}/signin`, 
            formdata, 
            {
                withCredentials: true
            }
         )

         if (response.status !== 200){
            return {
                success: false,
                error: response.data.message
            }
         }



         return {
            success: true,
            user: response.data.user
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const SendPasswordResetMail = async (formdata)=>{
    try{
        const response = await axios.post(
           `${axiosLink}/forgot-password`, 
            formdata, 
            {
                withCredentials: true
            }
         )

         if (response.status !== 200){
            return {
                success: false,
                error: response.data.message
            }
         }



         return {
            success: true,
            user: response.data.user
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const ResetOldPassword = async (password, token)=>{
    try{
        const response = await axios.post(
           `${axiosLink}/reset-password/${token}`, 
            {password}, 
            {
                withCredentials: true
            }
         )

         if (response.status !== 200){
            return {
                success: false,
                error: response.data.message
            }
         }



         return {
            success: true,
            user: response.data.user
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const UpdateProfileInfo = async (formdata)=>{
    try{
        const response = await axios.post(
           `${axiosLink}/update`, 
            formdata, 
            {
                headers : {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }
         )

         if (response.status !== 200){
            return {
                success: false,
                error: response.data.message
            }
         }



         return {
            success: true,
            user: response.data.user
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const verify = async ()=>{
    try{
        const response = await axios.get(
           `${axiosLink}/verify`, 
            {
                withCredentials: true
            }
         )

         if (response.status !== 200){
            return {
                success: false,
                error: response.data.message
            }
         }

         

         return {
            success: true,
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Internal Server Error",
        }
    }
}

export const Logout = async ()=>{
    try{
        const response = await axios.get(
           `${axiosLink}/logout`, 
            {
                withCredentials: true
            }
         )

         if (response.status !== 200){
            return {
                success: false,
                error: response.data.message
            }
         }

         

         return {
            success: true,
            message: "logout successful ✅"
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}