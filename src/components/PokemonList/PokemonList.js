import React from 'react';

export default function PokemonList({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  return (
    <div className="list">
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
          <img src={poke.url_image}></img>
          <br></br>
          Type:1 {poke.type_1}
          <br></br>
          Type:2 {poke.type_2}
          <br></br>
          Species: {poke.species_id}
          <br></br>
          Attack: {poke.attack}
          <br></br>
          Speed: {poke.speed}
        </p>
      ))}
      <div>Page: {currentPage}</div>
      <button className="next" onClick={handleNextPage}>
        Next!
      </button>
    </div>
  );
}
