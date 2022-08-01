import axios from "axios";

export const DOMAIN = 'https://movie0706.cybersoft.edu.vn'

export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIyOS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzIyNzIwMDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MjQxOTYwMH0.SZe3CJl1OkNH-0zfzqOV0CSC8WZ6q2hw64UykpCytT0";
export const GROUP_ID = 'GP04'
export const USER_LOGIN = 'userLogin';
export const ACCESS_TOKEN = 'accessToken';



//Cấu hình interceptor cho axios (Tất cả request gọi = axios đều được cấu hình) (1 dự án làm 1 duy nhất)

export const http = axios.create({
    baseURL:'http://movienew.cybersoft.edu.vn',
    timeout:30000,
})

http.interceptors.request.use((config)=>{
    config.headers = {
        ...config.headers,
        'TokenCyberSoft':TOKEN_CYBERSOFT,
        'Authorization': localStorage.getItem(ACCESS_TOKEN)  //Token mà người dùng đăng nhập
    }
    return config
}, (errors) => {
    return Promise.reject(errors)
})