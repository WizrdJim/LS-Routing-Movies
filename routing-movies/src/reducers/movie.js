const movieReducer = (movieList = [], action) => {
  switch(action.type) {
    case 'GET_MOVIE':
    return action.payload.movies;
    default:
    return movieList;
  }
}

export default movieReducer;