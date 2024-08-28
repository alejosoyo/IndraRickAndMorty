import React from 'react';
import useCharacters from './hooks/useCharacters';
import Character from './components/character';

const App = () => {
  const { data: characters, loading, error } = useCharacters();

  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center me-4">Rick and Morty Characters</h1>
      <Character characters={characters} />
    </div>
  );
};

export default App;