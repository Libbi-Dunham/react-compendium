export async function getPokemon(query, sort) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('sort', 'pokemon');
  params.set('direction', sort);
  const response = await fetch(`
  https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const pokemonData = await response.json();
  return pokemonData;
}
