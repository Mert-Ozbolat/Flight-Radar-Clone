import axios from "axios";

const api = axios.create({
    baseURL: "https://flight-radar1.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': "d3e1b88b5amsh5d3244362967668p117b86jsn38a0d42d8561",
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
})

export default api;
