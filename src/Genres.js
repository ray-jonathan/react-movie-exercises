import React from 'react';
import movies from './movies';

function Genres(){
    const movieGenres = Object.keys(movies)
    return(<select>

        {movieGenres.map((genre, i) => <option>{genre}</option>)}
        
    </select>)
}

export default Genres;