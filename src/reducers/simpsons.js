import { FETCH_QUOTE, FETCH_QUOTE_LOADING, FETCH_QUOTE_ERROR } from '../actions/simpsons';

const initialState = {
  qoute: '',
  characterName: '',
  characterImage: '',
  error: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTE_ERROR: 
      return { ...state, error: action.payload, loading: false };
    case FETCH_QUOTE:
      return {  
        ...state, 
        error: null, 
        loading: false,
        quote: action.payload.quote,
        characterName: action.payload.character,
        characterImage: action.payload.image
      };
    default:
      return state;
  }
}
