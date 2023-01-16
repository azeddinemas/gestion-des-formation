import { API_URL } from "../Components/Config";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

export const login = (user) => (dispatch) => {
  
  axios.post(`${API_URL}/user/login`, user)

    .then((res) => {

      toast.success('Login succefully !')
      localStorage.setItem('info', JSON.stringify(res.data))
   

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data.user,
      });
   

    })
    .catch(error => {

      if (error.response) {
        toast.warning(error.response.data.error, 'Please chek Form !')
        dispatch({
          type: 'LOGIN_FAIL',
        });
      }

    })


}

export const logout = () => dispatch => {
  axios.get(`${API_URL}/user/signout`)
  .then(() => {
    toast.success('Logout succefully !')
      localStorage.removeItem('jwt_info')

      dispatch({
        type: 'LOGOUT',
      });
  })


};

<ToastContainer/>