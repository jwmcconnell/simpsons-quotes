import reducer from './simpsons';
import { FETCH_QUOTE, FETCH_QUOTE_LOADING, FETCH_QUOTE_ERROR } from '../actions/simpsons';

describe('simpsons reducer', () => {
  it('handles the fetch quote action', () => {
    const initialState = {
      quote: '',
      characterName: '',
      characterImage: '',
      error: null,
      loading: false,
    };

    const newState = reducer(initialState, {
      type: FETCH_QUOTE,
      payload: [{ 
        quote: 'hello', 
        character: 'some name', 
        image: 'some image' 
      }]
    }); 

    expect(newState).toEqual({
      loading: false, 
      error: null,
      quote: 'hello',
      characterName: 'some name', 
      characterImage: 'some image'
    });
  });

  it('handles the fetch characters loading action', () => {
    const initialState = {
      quote: '',
      characterName: '',
      characterImage: '',
      error: null,
      loading: false,
    };

    const newState = reducer(initialState, {
      type: FETCH_QUOTE_LOADING,
    }); 

    expect(newState).toEqual({
      quote: '',
      characterName: '',
      characterImage: '',
      error: null,
      loading: true,
    });
  });

  it('handles the fetch characters error action', () => {
    const initialState = {
      quote: '',
      characterName: '',
      characterImage: '',
      error: null,
      loading: true,
    };

    const newState = reducer(initialState, {
      type: FETCH_QUOTE_ERROR,
      payload: 'some error'
    }); 

    expect(newState).toEqual({
      quote: '',
      characterName: '',
      characterImage: '',
      error: 'some error',
      loading: false,
    });
  });
});
