import Link from "next/link";
import { api_url } from "../app/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${api_url}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
        <div className={styles.menu}>
          <Link href={`/movies/${id}`}>Video</Link>
          <Link href={`/movies/${id}/credits`}>Credits</Link>
          <Link href={`/movies/${id}/providers`}>Providers</Link>
          <Link href={`/movies/${id}/similar`}>Similar</Link>
        </div>
      </div>
    </div>
  );
}
