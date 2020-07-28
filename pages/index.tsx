import Head from 'next/head';
import { IPokemon } from '../Types';
import Card from '../components/Card';
import Link from 'next/link';
import { getPokemon } from './../lib/posts';
import { GetServerSideProps } from 'next';

const Home = ({ pokemons }: { pokemons: IPokemon[] }) => {
  return (
    <div id='root'>
      <Head>
        <title>Pokedex</title>
      </Head>
      {pokemons.map((pokemon) => (
        <Link
          href='/posts/[id]'
          as={`/posts/${pokemon.id.toString()}`}
          key={pokemon.id}
        >
          <a>
            <Card pokemon={pokemon} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemons = [];
  for (let i = 1; i <= 100; i++) {
    const newPokemon = await getPokemon(i.toString());
    pokemons.push(newPokemon);
  }

  return {
    props: {
      pokemons,
    },
  };
};
