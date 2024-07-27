import { Suspense } from "react";
import { IParams } from "../page";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import MovieSimilar from "../../../../../components/movie-similar";

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
      <Suspense fallback={<h1>Loading movie similar</h1>}>
        <MovieSimilar id={id} />
      </Suspense>
    </div>
  );
}