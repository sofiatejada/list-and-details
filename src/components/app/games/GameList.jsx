import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import { Link } from 'react-router-dom';

const GameList = ({ games }) => (
  <ul aria-label="games">
    {games.map((game) => (
      <li key={game.id}>
        <Link key={game.id} to={`/${game.id}`}>
          <Game  
            name={game.name}
            url={game.url}
          />
        </Link>
        </li>
    ))}
  </ul>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GameList;

