import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/Pokemon';
import PokemonList from './components/PokemonList/PokemonList';
import Controls from './components/Controls/Controls';
import Header from './components/Header/Header';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemon(query, sort);
      setPokemon(pokemonData.results);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, sort]);

  return (
    <div className="App">
      <Header />
      <Controls query={query} setQuery={setQuery} setLoading={setLoading} setSort={setSort} />
      {loading && <span className="loading"></span>}
      {!loading && <PokemonList pokemon={pokemon} />}
    </div>
  );
}

export default App;
