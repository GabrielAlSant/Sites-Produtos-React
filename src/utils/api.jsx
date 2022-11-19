import axios from "axios"

const api = axios.create({
baseURL:"https://bd-produtos-react-app.cyclic.app"

})

export default api;