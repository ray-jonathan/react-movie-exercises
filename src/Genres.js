import React from 'react';
import movies from './movies';

function Genres(props){
    const movieGenres = Object.keys(movies)
    return(<select onChange={props.pickGenre}>

        {movieGenres.map((genre, i) => <option key={i} value={genre} >{genre}</option>)}
        
    </select>)
}

export default Genres;