import { Metadata } from "next";
import MovieList from "../../components/movie-list";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(API_URL);
  const json = await response.json();
  if (!response.ok) {
    throw new Error("Faild to fetch data");
  }
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <MovieList moviesData={movies} />
  );
}
