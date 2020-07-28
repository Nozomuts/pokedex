import { IPokemon } from "../Types";
import fetch from 'node-fetch';

export const getPokemon = async (id: string|string[]|undefined) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: any = await res.json();
  const pokemonType: string = pokemon.types.map((poke: any) => poke.type.name);

  const transformedPokemon: IPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType,
  };

  return transformedPokemon;
};
