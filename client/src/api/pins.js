import axios from "axios"

const axiosLink = "http://localhost:3000/api/pin";

export const newPin = async (formdata)=>{
   
    try{
        const response = await axios.post(
           `${axiosLink}/create`, 
            formdata, 
            {
                headers : {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
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
            pinId: response.data.pin
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const getPinDetails = async (pinId)=>{
   
    try{
        const response = await axios.post(
           `${axiosLink}/${pinId}`,  
           {
            action: "fetch pins details"
           },
            {
                withCredentials: true,
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
            pin: response.data.pin
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const getAllPins = async ()=>{
   
    try{
        const response = await axios.post(
           `${axiosLink}/pins`,  
           {
            action: "fetch pins"
           },
            {
                withCredentials: true,
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
            pins: response.data.pins
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const deletePin = async (pinId)=>{
    try{

        const response = await axios.post(
            `${axiosLink}/delete`,  
            {
             pinId: pinId
            },
             {
                 withCredentials: true,
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
             pins: response.data.pins
          }

    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}