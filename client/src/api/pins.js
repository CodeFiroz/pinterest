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

