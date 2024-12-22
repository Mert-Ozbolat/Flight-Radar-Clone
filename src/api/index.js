import axios from "axios";
const ApiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
    baseURL: "https://flight-radar1.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': ApiKey,
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
})

export default api;
