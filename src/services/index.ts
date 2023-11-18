import axios, { AxiosError } from "axios";
import { IMovies, ITvSeries } from "../model";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "acc52bd1b22703336fe1f82c94a4c2d9";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2M1MmJkMWIyMjcwMzMzNmZlMWY4MmM5NGE0YzJkOSIsInN1YiI6IjY0N2M4YzM0MTc0OTczMDBkZTY2ZGY4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JqWMT1gi_quPlcJWo5S5kUWRJQSzMfF_2b1dANMA4fE",
  },

});



export const getMovies = async () => {
  try {
    const {data} = await api.get(
      "movie/now_playing", {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        page: 1,
      },
    });
    const movies: IMovies[] = data.results
    return movies
  
  } catch ({ response }: AxiosError | any) {
    console.log(response);
  }
};

export const getTvSeries = async () => {
  try {
    const {data} = await api.get(
      "discover/tv", {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        page: 1,
      },
    });
    const tvSeries: ITvSeries[] = data.results
    return tvSeries;
  
  } catch ({ response }: AxiosError | any) {
    console.log(response);
  }
};
