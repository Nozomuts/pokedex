import React from 'react';
import { IPokemon } from '../Types';

const Card = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <div className='card'>
      <span className='card--id'>#{pokemon.id}</span>
      <img className='card--image' src={pokemon.image} />
      <h1 className='card--name'>{pokemon.name}</h1>
      <span className='card--details'>{pokemon.type}</span>
    </div>
  );
};

export default Card;
