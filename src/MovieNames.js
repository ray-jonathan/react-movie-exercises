import React from 'react';
import movies from './movies';

function MovieNames(props){
    const movieNames = Object.keys(movies[props.chosenGenre])
    return(<select>

        {movieNames.map((name, i) => <option key={i} value={name} onChange={props.pickMovie}>{name}</option>)}
        
    </select>)
}

export default MovieNames;