import axios from "axios";


const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_APP_API_URL}/api`,
    validateStatus: (status) => {
        return status < 500;
    }
});

export const addProperty =(data) => {
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