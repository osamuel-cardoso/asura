export const API_KEY = import.meta.env.VITE_WEATHER_KEY
const city = "Rio Grande, BR"
export const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
