import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VideoGamesDetailContainer extends Component {
  render() {
    return (
      <div>
        <Link to={`/${this.props.id}`}>
        </Link>
      </div>
    )
  }
}

