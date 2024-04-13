// import axios from 'axios'

// const axiosClient = axios.create({
//     baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
//     responseType: 'json'
// })

// axiosClient.interceptors.response.use(
//     response => response,
//     error => {
//       // Handle error globally
//       console.error('Axios error:', error);
//       return Promise.reject(error);
//     }
//   )

//   axiosClient.interceptors.request.use(request => {
//     console.log('Starting Request', request)
//     return request
//   })
  
//   axiosClient.interceptors.response.use(response => {
//     console.log('Response:', response)
//     return response
//   })

//   export default axiosClient