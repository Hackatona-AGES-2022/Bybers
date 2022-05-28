import axios from "axios"

const config = {
    baseURL: `54.203.217.53:5000/api`,
  }

  export default axios.create(config);