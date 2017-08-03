const movieReducer = (movieList = [], action) => {
  switch(action.type) {
    case 'GET_MOVIE':
    return action.payload.data;
    default:
    return movieList;
  }
}

export default movieReducer;