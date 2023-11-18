export interface IMovies {
   id: number; 
   title: string;
   release_date: string;
   backdrop_path: string;
   poster_path: string;
   vote_average: number;
   overview: string;
}

export interface ITvSeries {
   id: number; 
   name: string;
   backdrop_path: string;
   poster_path: string;
   vote_average: number;
   overview: string;
}