import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div className="list">
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon.toUpperCase()}
          <img src={poke.url_image}></img>
          <br></br>
          Type:1 {poke.type_1}
          <br></br>
          Type:2 {poke.type_2}
          <br></br>
          Species: {poke.species_id}
        </p>
      ))}
    </div>
  );
}
