import React, { useEffect, useState } from "react";
import axios from "axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="relative flex items-center"></div>
      <div id={"slider"}>
        {movies.map((item, id) => (
          <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block">
            <img src={`http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
