import axios from "axios"

// const config = {
//     baseURL: `http://localhost:5000/api/`,
//   }

  const config = {
    baseURL: `http://54.202.232.17:5000/api/`,
  }

  export default axios.create(config);