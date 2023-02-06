import { useEffect, useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "./MovieCard";
import "../components/ContainerMovieCard.css"

export function ContainerMovieCard(){
    const [movies,SetMovies] = useState([])
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            SetMovies(data.results);
        })
    }, []);

    return(
        <ul className="container">
            {movies.map((movie)=>(
               <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}