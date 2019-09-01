import { createAction } from 'promise-middleware-redux';
import { getQuote } from '../services/simpsonsApi';

export const [
  fetchQuote,
  FETCH_QUOTE,
  FETCH_QUOTE_LOADING,
  FETCH_QUOTE_FULFILLED,
  FETCH_QUOTE_ERROR
] = createAction('FETCH_QUOTE', getQuote);
