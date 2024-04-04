import React, { useEffect, useRef, useState } from "react";
import axios from "../axios";
import "../style/row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.table(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleScroll = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 1760, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="row-posters" ref={rowRef}>
        {movies.map((movie) => (
          <img
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            className="row-poster"
            key={movie.id}
          />
        ))}
        <button className="arrow-right" onClick={handleScroll}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Row;
