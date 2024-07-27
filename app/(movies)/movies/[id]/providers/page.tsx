import { Suspense } from "react";
import { IParams } from "../page";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import MovieProviders from "../../../../../components/movie-providers";

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id)
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
        <MovieProviders id={id} />
      </Suspense>
    </div>
  );
}