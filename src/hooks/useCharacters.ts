import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { Character } from '../interfaces/character';

const useCharacters = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(config.API_URL);
        setData(response.data.results);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, []);

  return { data, loading, error };
};

export default useCharacters;