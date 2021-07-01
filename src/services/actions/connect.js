import axios from 'axios'
import {API_URL} from "../config/constant"

const request = axios.create({
    baseURL: `${API_URL}`,
    timeout:1000,
    headers: { "X-Custom-Header": "foobar" }
});
export default request