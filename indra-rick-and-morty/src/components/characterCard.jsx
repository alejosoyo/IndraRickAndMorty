import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-white p-4">
      <img src={character.image} alt={character.name} className="w-full h-64" />
      <h2 className="text-lg font-bold">{character.name}</h2>
      <p className="text-gray-700">{character.species}</p>
    </div>
  );
};

export default CharacterCard;