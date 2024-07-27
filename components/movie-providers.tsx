import { api_url } from "../app/constants";
import styles from "../styles/movie-providers.module.css";

async function getProviders(id: string) {
  const response = await fetch(`${api_url}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  const korea = providers.US || {rent : []};
  return (
    <div className={styles.providerContainer}>
    {/* 대여 항목 */}
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>대여 가능한 플랫폼</h3>
      <div className={styles.providerRow}>
        {korea.rent?.length > 0 ? (
          korea.rent.map((provider) => (
            <div key={provider.provider_id} className={styles.providerItem}>
              <img
                src={provider.logo_path}
                alt={provider.provider_name}
                className={styles.providerLogo}
              />
            </div>
          ))
        ) : (
          <p>대여 정보가 없습니다.</p> // 대여 정보가 없을 경우 표시할 내용
        )}
      </div>
    </div>
  
    {/* 구매 항목 */}
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>구매 가능한 플랫폼</h3>
      <div className={styles.providerRow}>
        {korea.buy?.length > 0 ? (
          korea.buy.map((provider) => (
            <div key={provider.provider_id} className={styles.providerItem}>
              <img
                src={provider.logo_path}
                alt={provider.provider_name}
                className={styles.providerLogo}
              />
            </div>
          ))
        ) : (
          <p>구매 정보가 없습니다.</p> // 구매 정보가 없을 경우 표시할 내용
        )}
      </div>
    </div>
  
    {/* 정보 링크를 별도로 제공 */}
    {korea.link && (
      <div className={styles.infoLink}>
        <a href={korea.link} target="_blank" rel="noopener noreferrer">
          자세한 정보 보기
        </a>
      </div>
    )}
  </div>
  
  );
}
