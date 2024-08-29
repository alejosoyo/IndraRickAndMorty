import { useReducer, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { Action, State } from '../interfaces/character';

const initialState: State = {
  data: [],
  loading: true,
  error: null,
};

const dataFetchReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

const useCharacters = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    const getCharacters = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        //had a problem with Vite's import.meta for the Tests, for the moment I had to use this method of Config.
        const response = await axios.get(config.API_URL);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data.results });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: 'Error fetching data' });
      }
    };

    getCharacters();
  }, []);

  return { ...state };
};

export default useCharacters;