import axios from "axios";

const api = axios.create({
    baseURL: "https://flight-radar1.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '5a351d53c0msh396abe21c99b9dep13da85jsn9695451cf34e',
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
})

export default api