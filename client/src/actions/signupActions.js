import axios from 'axios';
export const userSigupRequest = (userData) => {
   return dispatch =>{
       return axios.post('api/user',userData)
   }
}