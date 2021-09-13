import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ id, name, url }) => (
  <>
    <p>
      {id},
      {name},
      {url},
    </p>
  </>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Game;
