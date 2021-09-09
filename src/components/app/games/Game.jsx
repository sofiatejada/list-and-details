import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name }) => (
  <>
    <p>
      {name},
    </p>
  </>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Game;
