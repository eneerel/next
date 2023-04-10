import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  params: [];
}

export default function Movie({ movie }: any) {
  const router = useRouter();
  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }
  return (
    <div className="cardDet p-5">
      <div className="flex">
        <Image
          src={movie.poster || "/images/zurag.jpeg"}
          alt="moviePhoto"
          width={300}
          height={300}
          className=" rounded"
        />
        <div className="cardMini">
          {" "}
          <div className=" text-5xl p-5 font-bold">{movie.title} :</div>
          <div className="grid grid-cols-2 mx-auto mb-0 p-2.5">
            <div className="w-21 text-center text-2xl">
              IMDB:
              {movie.imdb.rating}%
            </div>
            <div className="grid grid-cols-2 text-2xl">
              <FontAwesomeIcon
                className="text-yellow-500 w-5 mx-3"
                icon={faStar}
              />
              {movie.tomatoes?.viewer?.meter || "..."}%
            </div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold m-5 text-stone-600">| MOVIE INFO </div>
      <div className="text-xl "> {movie.fullplot}</div>
      <div className="text-xl font-bold ">Genre: {movie.genres}</div>
      <div className="text-xl font-bold">
        Orginal Language : {movie.languages}
      </div>
      <div className="text-xl font-bold">RunTime : {movie.runtime}m</div>
      <div className="text-xl font-bold">Producer: {movie.production}</div>
      <div className="text-xl font-bold">({movie.year})</div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8000/movies");
  const movies = await res.json();
  const paths = movies?.movies?.map((movie: any) => ({
    params: { _id: movie._id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`http://localhost:8000/movies/${params._id}`);
  const data = await res.json();

  return { props: { movie: data.movie } };
}
