import axios from 'axios';

export const GET_MOVIE = 'GET_MOVIE';

export const getMovie = () => {
  const promise = axios.get('http://localhoste:5000/movie');
  return {
    type: GET_MOVIE,
    payload: promise
  };
}