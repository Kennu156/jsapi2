import axios from "axios"
const openWeatherAPI = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export default openWeatherAPI