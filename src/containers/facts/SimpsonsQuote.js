import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import { getQuote, getCharacterName, getCharacterImage, getLoading } from '../../selectors/simpsons';
import Load from '../../components/quote/Load';
import { withFetch } from '../withFetch';

class SimpsonsQuote extends Component {
  static propTypes ={
    fetch: PropTypes.func.isRequired,
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }
  
  render() {
    const { quote, characterName, characterImage, fetch, loading } = this.props;
    return loading ? <h2>Loading</h2> : (
      <>
        <Load fetch={fetch} />
        <Quote 
          quote={quote} 
          characterName={characterName} 
          characterImage={characterImage} 
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state),
  loading: getLoading(state)
});

export default connect(
  mapStateToProps,
  null
)(withFetch(SimpsonsQuote));
