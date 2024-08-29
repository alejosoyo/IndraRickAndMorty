import React from 'react';
import { CharacterList } from './components/CharacterList';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CharacterList />
    </>
  );
};

export default App;