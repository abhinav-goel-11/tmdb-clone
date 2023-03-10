import React,{useState,useEffect} from 'react';
import Image from '../banner.jpg';
import axios from 'axios';

function Banner() {

    const [movie,setMovie] = useState({});
    useEffect(function (){
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=83dd607c17289557a425a6e9b404865b").then((res) => {
            setMovie(res.data.results[0]);
        })
    },[])


  return (
    <>
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh] bg-cover bg-center flex items-end`}>
            <div className="text-xl md:text-3xl p-4 text-white bg-gray-900 bg-opacity-50 w-full flex justify-center">
                {movie.title}
            </div>
        </div>
    </>
  )
}

export default Banner