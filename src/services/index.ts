import axios, { AxiosError } from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "acc52bd1b22703336fe1f82c94a4c2d9";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2M1MmJkMWIyMjcwMzMzNmZlMWY4MmM5NGE0YzJkOSIsInN1YiI6IjY0N2M4YzM0MTc0OTczMDBkZTY2ZGY4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JqWMT1gi_quPlcJWo5S5kUWRJQSzMfF_2b1dANMA4fE",
  },
  params: {
    api_key: API_KEY,
    language: "pt-BR",
    page: 1,
  },
});

export const teste = async () => {
  try {
    const { data } = await api.get("movie/now_playing");
    console.log(data);
  } catch ({ response }: AxiosError | any) {
    console.log(response);
  }
};
