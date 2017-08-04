const selectedReducer = (selected= [], action) => {
  switch(action.type){
    case 'MOVIE_DETAILS':
    return action.payload.data;
    default:
    return selected;
  }
}

export default selectedReducer