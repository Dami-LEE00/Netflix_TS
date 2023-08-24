// https://api.themoviedb.org/3/movie/now_playing?api_key=~~~&language=en-US&page=1

const API_KEY = '68869aee2b5ccbed0472797476e8d485';
const BASE_PATH = 'https://api.themoviedb.org/3/';

export interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}