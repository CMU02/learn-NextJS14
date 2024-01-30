import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Something... is broke API`);
  }
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
