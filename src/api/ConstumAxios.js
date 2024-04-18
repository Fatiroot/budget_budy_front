import axios from "axios"


const ConstumAxios = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,

})
const token = localStorage.getItem("token");
ConstumAxios.defaults.headers.common["Authorization"]=`Bearer ${token}`
export default ConstumAxios
