import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, characterName, characterImage }) => {
  return (
    <section>
      <h2>{characterName}</h2>
      <p>{quote}</p>
      <img src={characterImage}></img>
    </section>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired
};

export default Quote;
