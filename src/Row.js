import React from 'react'
import { useState, useEffect } from 'react';
import axios from "./axios"
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargerRow }) {
    const [movies, setMovies] = useState([])
    const [trailerURL, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams  = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"))
                }).catch((error) => {console.log(error);})
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <div className="row">
                <div className="row_posters">
                    {movies.map(movie => (
                        <img onClick={() => handleClick(movie)} className={`row_poster ${isLargerRow && "row_largePoster"}`} key={movie.id} src={base_url + (isLargerRow ? movie.backdrop_path : movie.poster_path)} alt={movie.name} />
                    ))}
                </div>
                {trailerURL && <YouTube videoID={trailerURL} opts={opts} />}
            </div>
        </div>
    )
}

export default Row