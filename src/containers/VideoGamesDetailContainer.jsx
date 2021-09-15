import React, { Component } from 'react';
import { getGameById } from '../services/videoGamesApi';
// import { Link } from 'react-router-dom';
// import GameList from '../components/app/games/GameList';
import Game from '../components/app/games/Game';
import PropTypes from 'prop-types';

export default class VideoGamesDetailContainer extends Component {

  state = {
    loading: true,
    name: '',
    url: '',
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    getGameById(id)
    .then(game => 
      this.setState({ name: game.name, url: game.url, loading: false }))
    // console.log(id);
    // console.log(game);
    // console.log(this.state.games.name);
  }

  render() {
    const { loading, name, url } = this.state;
    console.log(this.state);

    if(loading) {
      return (
        <img alt="loading spinner" src="https://i.gifer.com/AzgT.gif" />
      );
    }
    return (
      <div>
        <Game id={this.props.match.params.id} name={name} url={url} />
      </div>
    )
    }
}

VideoGamesDetailContainer.propTypes = {
  match: PropTypes.any,
  params: PropTypes.any,
}

