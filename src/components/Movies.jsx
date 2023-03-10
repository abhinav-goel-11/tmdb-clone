import React,{useEffect, useState} from 'react'
import Pagination from './Pagination';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'

function Movies() {
    const [movies,setMovies] = useState([]);
    const [page,setPage] = useState(1);
    const [hover,setHover] = useState("");
    const [favourites,setFavourites] = useState([]);

    function goAhead(){
        setPage(page+1);
    }

    function goBack(){
        if(page>1)
        setPage(page-1);
    }

    

    useEffect(function (){
        // setInterval(function () {  //used to check the loader as data is coming so fast taht can't see loader
            
        // },1500)
        
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=83dd607c17289557a425a6e9b404865b&page=${page}`).then((res) => {
            
            setMovies(res.data.results);
            let oldFav = localStorage.getItem("imdb");
            oldFav = JSON.parse(oldFav) || [];
            setFavourites([...oldFav]);
        })
    },[page])

    function add(movie){
        let newArr = [...favourites,movie]
        setFavourites([...newArr]);
        localStorage.setItem("imdb",JSON.stringify(newArr));
    }

    function del(movie){
        let newArr = favourites.filter(m => m.id !== movie.id)
        setFavourites([...newArr]);
        localStorage.setItem("imdb",JSON.stringify(newArr));

    }
    


  return (
    <>
        <div className="mb-8">
            <div className="mt-8 mb-8 font-bold text-2xl text-center">
                Trending Movies
            </div>
            {
                movies.length === 0 ?
                    <div className="flex justify-center">
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div>
                :
                    <div className="flex flex-wrap justify-center">
                        {
                            movies.map((movie) => 
                                <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-cover bg-center flex items-end rounded-xl m-4 hover:scale-110 ease-out duration-300 relative`} key={movie.id} onMouseEnter={() => {
                                    setHover(movie.id)
                                }} 
                                onMouseLeave={() => {
                                    setHover("");
                                }}>
                                    {
                                        hover === movie.id &&  
                                        <>   
                                            {
                                                favourites.find((m) => m.id === movie.id)?<div className="absolute top-2 right-2 bg-gray-800 text-2xl rounded-xl cursor-pointer hover:animate-bounce" onClick={() => del(movie)}>❌
                                            </div>:<div className="absolute top-2 right-2 bg-gray-800 text-2xl rounded-xl cursor-pointer hover:animate-bounce" onClick={() => add(movie)}>😍
                                            </div>
                                            }                                    
                                            

                                            
                                        </>
                                    }
                                    
                                    <div className="text-sm md:text-xl font-bold p-1 text-white bg-gray-900  w-full text-center rounded-b-xl">
                                        {movie.title}
                                    </div>
                                </div>
                            )
                        }
                    

                    
                    </div>
            }
        </div>
        <Pagination page={page} nextPage={goAhead} prevPage={goBack}/>
    </>
  )
}

export default Movies