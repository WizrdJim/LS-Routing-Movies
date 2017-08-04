import { combineReducers } from 'redux';
import movieReducer from './movie';
import selectedReducer from './selected';

const rootReducer = combineReducers({
  movie: movieReducer,
  selected: selectedReducer
});

export default rootReducer;