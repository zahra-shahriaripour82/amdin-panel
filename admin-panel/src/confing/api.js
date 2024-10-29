import axios from "axios";
const token =

 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MzAwODk0NTM0NzciLCJ1c2VybmFtZSI6InNhbWFubm5uIiwiaWF0IjoxNzMwMDg5NDY5LCJleHAiOjE3MzAwOTMwNjl9.PHiu2R6FS8My6vU-S2u7UaxK4AKsVtpSBAwSCPb3cWY"
const api=axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // baseURL:"http://localhost:3000/",
    
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
       
      
    },
}
)



export { api }