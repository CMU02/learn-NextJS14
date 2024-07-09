"use client";
import styles from "../styles/home.module.css"
import Movie from "./movie";

import { useEffect, useState } from "react";

export default function HomeClient({moviesData}) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        setMovies(moviesData);
    },[]);

    return (
      <div className={styles.container}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    );
}