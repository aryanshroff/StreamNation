import React, { useEffect, useState } from "react";
import requests from "../HoldingReq";
import axios from "axios";

//base url for images : http://image.tmdb.org/t/p/original/

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //console.log(movie);
  const truncateString=(str,num)=>{
    if(str?.length>num){
        return str.slice(0,num)+'...';
    }
    else{
        return str; 
    }
  }
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="object-cover w-full h-full"
          src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        ></img>
        <div className="w-full absolute p-4 md:p-8 top-[20%]">
            <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="px-5 py-2 text-black bg-gray-300 border-gray-500 ">
              Play
            </button>
            <button className="px-5 py-2 ml-4 text-white border-gray-500 ">
              Watch Later
            </button>
          </div>
          <p className="text-sm text-gray-400">Released {movie?.release_date}</p>
          <p className="w-full text-gray-300 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{truncateString(movie?.overview ,175)}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
