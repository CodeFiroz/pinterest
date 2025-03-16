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

         if (response.status !== 200){
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

export const getMyPins = async (username)=>{
   
    try{
        const response = await axios.post(
           `${axiosLink}/my-pins`,  
           {
            username
           },
            {
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
            pins: response.data.pins
         }
    
    }catch(err){
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        }
    }
}

export const mySaved = async ()=>{
   
    try{
        const response = await axios.post(
           `${axiosLink}/my-saved`,  
           {
            action: ''
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

export const deletePin = async (pinId) => {
    try {
        const response = await axios.delete(`${axiosLink}/trash`, {
            data: { pinId },  // ✅ Correct way to send data in DELETE requests
            withCredentials: true,
        });

        if (response.status !== 200) {
            return {
                success: false,
                error: response.data.message,
            };
        }

        return {
            success: true,
            pins: response.data.pin,
        };
    } catch (err) {
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        };
    }
};

export const LikePin = async (pinId) => {
    try {
        const response = await axios.put(
            `${axiosLink}/like/${pinId}`, 
            {}, 
            { withCredentials: true } 
        );

        if (response.status !== 200) {
            return {
                success: false,
                error: response.data.message,
            };
        }

        return {
            success: true,
            pins: response.data.pin,
            user: response.data.user
        };
    } catch (err) {
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        };
    }
};

export const savePin = async (pinId) => {
    try {
        const response = await axios.put(
            `${axiosLink}/save/${pinId}`, 
            {}, 
            { withCredentials: true } 
        );

        if (response.status !== 200) {
            return {
                success: false,
                error: response.data.message,
            };
        }

        return {
            success: true,
            pins: response.data.pin,
            user: response.data.user
        };
    } catch (err) {
        return {
            success: false,
            error: err.response?.data?.message || "Something went wrong",
        };
    }
};
