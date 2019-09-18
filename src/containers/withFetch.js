import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions/simpsons';

export const withFetch = Component => {
  class WithFetch extends React.Component {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
    }

    render() {
      return <Component {...this.props}/>;
    }
  }

  const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchQuote())
  });

  return connect(null, mapDispatchToProps)(WithFetch);
};
