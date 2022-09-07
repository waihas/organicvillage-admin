import axios from 'axios'
import Swal from 'sweetalert2'
import store from '@/store/index'
import router from '@/router/index'
// require('dotenv').config()

const instance = axios.create({
   // baseURL: `http://localhost:8000/api/v1`, // for dev
   baseURL: `https://dev.oceansheet.com/api/v1`, // for deploy
   // baseURL: `${process.env.VUE_APP_API_URL}/api/v1`, // for deploy
   withCredentials: true,
});

instance.interceptors.request.use(
   config => {
      if(store.getters.userToken) {
         config.headers['Authorization'] = `Bearer ${store.getters.userToken}`;
      }

      return config;
   },
   error => {
      Promise.reject(error);
   }
);

instance.interceptors.response.use(response => response, error => {
   const { status } = error.response
 
   if( !status ) {
      Swal.fire({
         icon: 'error',
         title: 'Error',
         text: 'Network Error.',
         showCancelButton: false,
         reverseButtons: true,
         confirmButtonColor: "#868F03",
         confirmButtonText: 'Confirm',
      })
   }
   
   if (status >= 500) {
     Swal.fire({
       icon: 'error',
       title: 'Oops!',
       text: 'Something went wrong.',
       reverseButtons: true,
       confirmButtonColor: "#868F03",
       confirmButtonText: 'Confirm',
       cancelButtonText: 'Cancel'
     })
   }

   if ((status === 401 || status == 403) && store.getters['isAuthenticated']) {
      Swal.fire({
       icon: 'warning',
       title: 'Session expired!',
       text: 'Please log in again.',
       reverseButtons: true,
       confirmButtonColor: "#868F03",
       confirmButtonText: 'Confirm',
       cancelButtonText: 'Cancel'
     }).then(() => {
       store.commit('logoutUser')
 
       router.push({ name: 'login' })
     })
   }
 
   return Promise.reject(error)
})

export default instance;