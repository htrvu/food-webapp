import axios from 'axios'

const baseURL = "https://ig-food-menus.herokuapp.com/";

const axiosConfig = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }

})

export default axiosConfig