import axios from "axios"

const API_KEY = "1be207489128b4462a990632bdcd5bac"
const baseURL = "https://api.themoviedb.org/3/"
export const baseImgURL = "https://image.tmdb.org/t/p/original"
const popular = baseURL + "movie/popular?" + API_KEY
// const latest = baseURL + "movie/top_rated?" + API_KEY
// const singlepage = baseURL + "/movie/" 


export const apis = {
    getPopularMovies : () => axios.get(baseURL + "movie/" + "popular" , {
        params: {
            api_key : API_KEY,
        }
    }),
    
    getLatestMovies: () => axios.get(baseURL + "movie/" + "top_rated", {
        params: {
            "api_key": API_KEY,
        },
    }),



    getSingleMovies: (id) => axios.get(baseURL + "movie/" + id, {
        params: {
            "api_key": API_KEY,
        },
    }),

    getCredits: (id) => axios.get(baseURL + "movie/" + id + '/credits', {
        params: {
            "api_key": API_KEY,
        },
    }),
    getVideo: (id) => axios.get(baseURL + "movie/" + id + '/videos', {
        params: {
            "api_key": API_KEY,
        },
    }),
    getActors: (id) => axios.get(baseURL + "person/" + id  ,{
        params: {
            "api_key": API_KEY,
        },
    }),
    getRecomend: (id) => axios.get(baseURL + "movie/" + id + "/recommendations"  , {
        params: {
            "api_key": API_KEY,
        },
    }),
   
    
}



