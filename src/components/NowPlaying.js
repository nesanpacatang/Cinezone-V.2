import { useEffect } from "react";
import { useState } from "react";
import { NowPlayingCard } from "./NowplayingCard";
const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=ba443e63c90864d5dffb2a2255267b7e&language=en-US";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  });
  return (
    <>
      {movies.map((movie) => (
        <NowPlayingCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default NowPlaying;
