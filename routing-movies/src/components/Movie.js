import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions';
import { movieDetails } from '../actions';

class Movie extends Component {
  debugger 
  constructor({match}){
    super();
    this.state = {
      params: this.props.match.params
    }
  }
  componentDidMount(){
    this.props.movieDetails(this.state.params.id);
  }
  render() {
    return (
      <div>
        <h1> {this.props.title} {this.props.director} </h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie,
    selected: state.selected
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: bindActionCreators(getMovie, dispatch),
    movieDetails: bindActionCreators(movieDetails, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)