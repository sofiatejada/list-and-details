import React, { Component } from 'react';
import { getGames } from '../services/videoGamesApi';
import GameList from '../components/app/games/GameList';

export default class VideoGamesContainer extends Component {

  state = {
    loading: true,
    games: [],
  }

  componentDidMount() {
    getGames().then((games) => this.setState({ games, loading: false }));
  }

  render() {
    const { loading, games } = this.state;

    if(loading) {
      return (
        <img alt="loading spinner" src="https://i.gifer.com/AzgT.gif" />
      );
    }

    return (
      <div>
        <GameList games={games} />
      </div>
    );
  }
}


