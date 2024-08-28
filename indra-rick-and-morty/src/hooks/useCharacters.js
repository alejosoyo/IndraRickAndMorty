import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharacters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, []);

  return { data, loading, error };
};

export default useCharacters;