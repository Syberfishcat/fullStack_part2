import axios from 'axios'

const api_key = import.meta.env.VITE_SOME_KEY

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getWeather = (city) => {
    const request = axios.get(`${openWeatherUrl}/?q=${city}&appid=${api_key}&units=metric`)
    return request.then(response => response.data)
}

export default {getAll, getWeather}