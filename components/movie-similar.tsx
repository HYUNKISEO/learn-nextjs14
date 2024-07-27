import { api_url } from "../app/constants";
import styles from "../styles/movie-similar.module.css";

export async function getSimilar(id: string) {
  const response = await fetch(`${api_url}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similars = await getSimilar(id);
  return (
    <div className={styles.container}>
      {similars.map((similar, index) => (
        <div key={index} className={styles.movie}>
          <img src={similar.poster_path} alt={similar.original_title} />
          <p>{similar.release_date}</p>
          <p className={styles.vote}>★{similar.vote_average.toFixed(1)}</p>
          <p className={styles.title}>{similar.title}</p>
        </div>
      ))}
    </div>
  );
}
