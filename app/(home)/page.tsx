import { Metadata } from "next";
import Link from "next/link";
import { resolve } from "path";

export const metadata: Metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(API_URL);
  const json = await response.json();
  if (!response.ok) {
    throw new Error("Faild to fetch data")
  }
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{movies.map(movie => <li><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}</div>;
}