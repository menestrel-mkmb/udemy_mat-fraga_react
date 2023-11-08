import axios from "axios";

export const API_PARAMS = {
    base_url_v3: "https://api.themoviedb.org/3/",
    endpoints: {
        movies: "movie/",
        nowplaying: "movie/now_playing"
    },
    token: "?api_key=",
    language: "&language="
}

export const INTERNAL_API_PARAMS = {
    key: "39403419bf5b64b3fca4a42733f1507a",
    lang: "pt-BR",
    page: 1
}

const apitmdb = axios.create({
    baseURL: API_PARAMS.base_url_v3
});

export default apitmdb;