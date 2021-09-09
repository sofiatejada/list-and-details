import React from "react";
import PropTypes from 'prop-types';
import Game from './Game';

const GameList = ({ games }) => (
  <ul aria-label="games">
    {games.map((game) => (
      <li key={game.id}>
        <Game name={game.name} image={game.image} rating={game.rating} />
      </li>
    ))}
  </ul>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
};

