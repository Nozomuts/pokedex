import Head from 'next/head';
import { IPokemon } from '../Types';
import Card from '../components/Card';
import Link from 'next/link';
import { getPokemon } from './../lib/posts';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

const Home = ({ pokemons }: { pokemons: IPokemon[] }) => {
  const [data] = useState(pokemons);
  return (
    <div id='root'>
      <Head>
        <title>Pokedex</title>
      </Head>
      {data&&data.map((el) => (
        <Link href='/posts/[id]' as={`/posts/${el.id.toString()}`} key={el.id}>
          <a>
            <Card pokemon={el} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemons = [];
  for (let i = 1; i <= 151; i++) {
    const newPokemon = await getPokemon(i.toString());
    pokemons.push(newPokemon);
  }

  return {
    props: {
      pokemons,
    },
  };
};
