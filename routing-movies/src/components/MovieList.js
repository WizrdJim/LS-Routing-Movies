import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions';
import { Link } from 'react-router-dom';
import { movieDetails } from '../actions';

class MovieList extends Component {
  constructor(props) {
    super()
  }
  componentDidMount(){
    this.props.getMovie();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.movie.map((movie, i) => {
            return (
              <Link to= {`/movies/${this.props.movie[i].id}`} onClick = {this.props.movieDetails(i)}> {this.props.movie[i].title} </Link>
            )
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: bindActionCreators(getMovie, dispatch),
    movieDetails: bindActionCreators(movieDetails, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)