import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

interface IProps {
  params: [];
}

const Movie = ({ movie }: any) => {
  const router = useRouter();
  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }
  return (
    <div className="bg-blue-400 h-full">
      <div className="container mx-auto">
        <h1 className="text-violet-700 text-4xl"> {movie.title}</h1>
        <div className="group">
          <Image src={movie.poster} width={300} height={200} alt="poster" />
          <p className="text-bold">
            {movie.year} : {movie.imdb.rating}
          </p>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:8000/movies/${query.id}`);
  const data = await res.json();

  return {
    props: { movie: data.movie },
  };
}

export default Movie;
