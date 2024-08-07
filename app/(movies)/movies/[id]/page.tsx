import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieProviders from "../../../../components/movie-proviers";

interface IParams {
  params: {id : string};
}

export async function generateMetadata({params:{id}} : IParams) {
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({
  params: { id },
}: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading Movie Providers</h1>}>
        <MovieProviders id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading Movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
