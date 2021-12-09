export async function getPokemon(query, sort, selectedType) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('sort', 'pokemon');
  params.set('direction', sort);

  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }
  const response = await fetch(`
  https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const pokemonData = await response.json();
  return pokemonData;
}

export async function getTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const pokemonData = await response.json();
  return pokemonData.map((item) => item.type);
}
