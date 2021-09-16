import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ id, name, url }) => (
  <>

      <h1>{name}</h1>
      {id},
      {url},

  </>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Game;
