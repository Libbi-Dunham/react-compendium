import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/Pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';
import Header from './components/Header/Header';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemon(query);
      setPokemon(pokemonData.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App">
      <Header />
      {loading && <span className="loading"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
