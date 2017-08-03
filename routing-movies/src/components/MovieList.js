import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions';
import { Link } from 'react-router-dom';

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
              <Link to= {`/movies/${this.props.movie[i].id}`}> {this.props.movie[i].title} </Link>
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
    getMovie: bindActionCreators(getMovie, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)