import React, { Component } from 'react';
import { getGameById } from '../services/videoGamesApi';
// import { Link } from 'react-router-dom';
// import GameList from '../components/app/games/GameList';
import Game from '../components/app/games/Game';

export default class VideoGamesDetailContainer extends Component {

  state = {
    loading: true,
    games: [],
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const game = getGameById(id);
    this.setState({ games: game, loading: false })
    console.log(game);
    console.log(game.name);
    // console.log(this.state.games.name);
  }


  render() {
    const { loading } = this.state;
    console.log(this.state);

    if(loading) {
      return (
        <img alt="loading spinner" src="https://i.gifer.com/AzgT.gif" />
      );
    }
    if(this.state.games.length) {
      return (
        <div>
          <Game id={this.state.games.id} name={this.state.games.name} url={this.state.url} />
        </div>
      )
    }
  }
}

