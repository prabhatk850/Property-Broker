import axios from "axios";


const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`,
    validateStatus: (status) => {
        return status < 500;
    }
});

export const addProperty =(data) => {
    console.log("firstdata",data,`${import.meta.env.VITE_API_BASE_URL}/api`)
    
   return axiosInstance.post("/property",data).then((response) => {
    console.log("first",response.data)
       return response.data;
    }).catch ((error)=> {
        console.log("error",error);
    });
}

export const getproperty =()=>{
    return axiosInstance.get("/property").then((response) => {
        return response.data;
    }
    ).catch((error) => {
        console.log("error",error);
    });
}

// import axios from "axios";


// const axiosInstance = axios.create({
//     baseURL:`https://fakestoreapi.com/`,
//     validateStatus: (status) => {
//         return status < 500;
//     }
// });

// export const addProperty =(data) => {
//     console.log("firstdata",data,`${import.meta.env.VITE_API_BASE_URL}/api`)
    
//    return axiosInstance.post("/property",data).then((response) => {
//     console.log("first",response.data)
//        return response.data;
//     }).catch ((error)=> {
//         console.log("error",error);
//     });
// }

// export const getproperty =()=>{
//     return axiosInstance.get("/property").then((response) => {
//         return response.data;
//     }
//     ).catch((error) => {
//         console.log("error",error);
//     });
// }

// export const gettest =()=>{
//     return axiosInstance.get("/products").then((response) => {
//         return response.data;
//     }
//     ).catch((error) => {
//         console.log("error",error);
//     });
// }
// // 