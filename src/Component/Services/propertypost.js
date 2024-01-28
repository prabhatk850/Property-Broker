import axios from "axios";


const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`,
    validateStatus: (status) => {
        return status < 500;
    }
});

export const addProperty =(data) => {
    console.log("firstdata",data,`${import.meta.env.VITE_API_BASE_URL}/api`)
    
   return axiosInstance.post("/addproperty",data).then((response) => {
       return response.data;
    }).catch ((error)=> {
        console.log("error",error);
    });
}

export const getproperty =()=>{
    return axiosInstance.get("/getproperty").then((response) => {
        return response.data;
    }
    ).catch((error) => {
        console.log("error",error);
    });
}