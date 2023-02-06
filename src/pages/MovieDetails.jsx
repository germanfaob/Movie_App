import { get } from "../data/httpClient"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/movieDetails.css"

export function MovieDetails(){

    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data)
            setGenres(data.genres[0])
        })
    },[movieId])

    const imageUrl = getMovieImg(movie.poster_path,500);

    return (
        <div className="details-container">
            <img src={imageUrl}
            alt={movie.title}
            className="col movie-img"
            />
            <div className="col movie-details">
                <p className="p-title-movie">
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p className="p-movie">
                    <strong>Género: </strong>
                    {genres.name}
                </p>
                <p className="p-movie">
                    <strong>Descripción: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}