import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"

async function getVideos(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  if (!response.ok) {
    throw new Error(`Something... is broke API`);
  }

  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  videos.length = 9; // 보여줄 비디오 갯수
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplayer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
