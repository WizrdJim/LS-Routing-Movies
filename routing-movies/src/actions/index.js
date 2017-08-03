import axios from 'axios';

export const GET_MOVIE = 'GET_MOVIE';

export const getMovie = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIE,
    payload: promise
  };
}

export const movieDetails = (data) => {
  const promise = axios.get(`http://localhost:5000/movies/:id`, data);
  return {
    type: 'MOVIE_DETAILS',
    payload: promise
  };
}