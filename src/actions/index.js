import axios from 'axios';

const API_KEY = 'c9f841282f65b02ad099672c937ba46e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url= `${ROOT_URL}&q=${city},de`;
    const request = axios.get(url);
    //PROMIS REQUEST 
    

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}