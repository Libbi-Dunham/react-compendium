import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div className="list">
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
          <img src={poke.url_image}></img>
        </p>
      ))}
    </div>
  );
}
