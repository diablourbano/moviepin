import React, { Component } from 'react';

import Utils from '../utils';

import MoviesMock from '../mocks/movies';

import Landing from './landing';
import Dashboard from './dashboard';

class MainLayout extends Component {

  constructor() {
    super();

    this.state = {
      windowSize: Utils.windowSize(),
      movies: []
    };
  }

  onResize() {
    this.setState({
      windowSize: Utils.windowSize()
    });
  }

  componentDidMount() {
    if (typeof window != 'undefined') {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  componentWillUnmount () {
    if( typeof window !== 'undefined' ) {
      window.removeEventListener('resize', this.onResize)
    }
  }

  searchFor(searchTerm) {
    let movies = [];

    if (searchTerm.length >=3) {
      movies = MoviesMock.filter((movie) => {
        return movie.title.match(searchTerm);
      });

    } else if (searchTerm.length < 3 &&
               searchTerm.length > 0 &&
               this.state.movies.length > 0) {
      movies = this.state.movies;

    } else if (searchTerm.length == 0 &&
               this.state.movies.length > 0) {
      movies = [];

    } else {
      return;
    }
    
    this.setState({
      movies: movies
    });
  }

  shouldAccess(canAccess) {
    if (canAccess) {
      this.setState({
        canAccess: canAccess
      });
    }
  }

  landing() {
    return (
      <Landing shouldAccess={(canAccess) => {
        console.log(canAccess)
        this.shouldAccess(canAccess);
      }}/>
    );
  }

  dashboard() {
    return (
      <Dashboard movies={this.state.movies}
                 windowSize={this.state.windowSize}
                 searchFor={this.searchFor.bind(this)}/>
    );
  }

  render() {
    let displayToShow;

    if (!this.state.canAccess) {
      displayToShow = this.landing();
    } else {
      displayToShow = this.dashboard();
    }
    return (
      displayToShow
    );
  }
}

export default MainLayout;