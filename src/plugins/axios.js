import axios from "axios";

const instance = axios.create({
  baseURL: 'https://nlstar.com/ru/api/catalog3/v1'
})

export default instance