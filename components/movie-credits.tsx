import { api_url } from "../app/constants";
import styles from "../styles/movie-credits.module.css";

async function getCredits(id: string) {
  const response = await fetch(`${api_url}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div key={credit.order} className={styles.item}>
          <img src={credit.profile_path} alt={credit.name} className={styles.image}/>
          <div className={styles.text}>
            <p className={styles.name}>{credit.original_name}</p>
            <p className={styles.role}>{credit.character} 역</p>
          </div>
        </div>
      ))}
    </div>
  );
}
