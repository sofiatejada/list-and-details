import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import { Link } from 'react-router-dom';

const GameList = ({ games }) => (
  <ul aria-label="games">
    {games.map((game) => (
      <Link key={game.id} to={`/${game.id}`}>
        <li key={game.id}>
          <Game  
            name={game.name}
          />
        </li>
      </Link>
    ))}
  </ul>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GameList;

