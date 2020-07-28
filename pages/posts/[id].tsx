import Card from '../../components/Card';
import { IPokemon } from '../../Types';
import { getPokemon } from '../../lib/posts';
import { Params } from 'next/dist/next-server/server/router';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';

const Post = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <div className='one-card'>
      <Card pokemon={pokemon} />
      <Link href='/'>
        <a className='back-home'>← Back</a>
      </Link>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const arr = [];
  for (let i = 1; i <= 151; i++) {
    arr.push(i);
  }

  const paths = arr.map((el) => `/posts/${el.toString()}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemon = await getPokemon(params?.id);

  return { props: { pokemon } };
};
