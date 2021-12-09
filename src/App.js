import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon, getTypes } from './services/Pokemon';
import PokemonList from './components/PokemonList/PokemonList';
import Controls from './components/Controls/Controls';
import Header from './components/Header/Header';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('asc');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemon(query, sort, currentPage, selectedType);
      setPokemon(pokemonData.results);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, sort, currentPage, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getTypes();
      setTypes(pokemonData);
    };
    fetchData();
  });

  return (
    <div className="App">
      <Header />
      <Controls
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        setSort={setSort}
        types={types}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {loading && <span className="loading"></span>}
      {!loading && (
        <PokemonList
          pokemon={pokemon}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default App;
