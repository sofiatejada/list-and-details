import React, { Component } from 'react';
import { getGameById } from '../services/videoGamesApi';
import { Link } from 'react-router-dom';

export default class VideoGamesDetailContainer extends Component {

  state = {
    loading: true,
    games: [],
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    getGameById()
  }


  render() {
    return (
      <div>
        <Link to={`/${this.props.id}`}>
        </Link>
      </div>
    )
  }
}

