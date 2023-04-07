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
    <div className="mx-auto shadow-2xl container w-80 h-92 p-10">
      <div>
        <Image
          src={movie.poster || "/images/zurag.jpeg"}
          alt="moviePhoto"
          width={100}
          height={100}
          className="w-full h-full object-cover rounded"
        />
        <div className=" text-3xl p-5 ">{movie.title}</div>
        <div className="text-2xl">{movie.plot}</div>
        <div className="grid grid-cols-2 mx-auto mb-0 p-2.5">
          <div className="w-21 text-center mx-2 border-dotted border-2 border-red-700">
            IMDB:
            {movie.imdb.rating}%
          </div>
          <div className="grid grid-cols-2 border-dotted border-2 border-yellow-500  text-center w-20 mx-20">
            {movie.tomatoes.viewer.rating}
            <FontAwesomeIcon
              className="text-yellow-500 w-5 mx-3"
              icon={faStar}
            />
          </div>
        </div>
      </div>
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
