import React from 'react';
import useCharacters from '../hooks/useCharacters';

export const CharacterList: React.FC = () => {
  const { data, loading, error } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {data.map((character) => (
        <div key={character.id} className="p-4 border border-gray-300 rounded-lg">
          <img src={character.image} alt={character.name} className="w-full h-64" />
          <h2 className="text-lg font-bold">{character.name}</h2>
          <p className="text-gray-700">{character.species}</p>
        </div>
      ))}
    </div>
  );
};