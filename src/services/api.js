import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '9b198cdde6f5f1eb4ba7e72458cb1e9f'

export const getData = async(city,country) =>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}