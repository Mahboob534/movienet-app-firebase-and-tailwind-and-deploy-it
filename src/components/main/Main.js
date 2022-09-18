import React, { useEffect, useState } from "react";
import requests from "../../route/Request";
import axios from "axios";
function Main() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => setMovies(response.data.results));
  }, []);
  // console.log(movies);

  const truncatString=(str,num)=>{
    if(str?.length >= num){
      return str.slice(0,num) + '...'
    }
    else{
      return str
    }
  } 

  return (
    <div className=" w-full h-[550px] text-white">
      <div className=" w-full h-full ">
        <div className="absolute bg-gradient-to-r from-black w-full h-[550px]"></div>
        <img
          className="w-full h-full object-cover"
          src={`https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute w-full top-[8%] p-4 md:p-8" style={{direction:"ltr"}}>
        <h1 className='text-3xl md:text-5xl'> {movie?.title}</h1>
        <div className="my-4" >
          <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5  ">
            {" "}
            نمایش{" "}
          </button>
          <button className="border text-white  border-gray-300 py-2 px-5 ml-4   ">
            {" "}
            نمایش بعدی{" "}
          </button>
        </div>
        <p className="teat-gray-400 text-sm">انتشار : {movie?.release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncatString(movie?.overview,150)}</p>
      </div>
    </div>
  );
}

export default Main;
