import { FETCH_QUOTE, FETCH_QUOTE_LOADING, FETCH_QUOTE_ERROR } from '../actions/simpsons';

const initialState = {
  quote: '',
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
        quote: action.payload[0].quote,
        characterName: action.payload[0].character,
        characterImage: action.payload[0].image
      };
    default:
      return state;
  }
}
