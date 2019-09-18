import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ fetch }) => {
  return <button onClick={fetch}>Load</button>;
};

Load.propTypes = {
  fetch: PropTypes.func.isRequired
};

export default Load;
