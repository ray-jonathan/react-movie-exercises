import React from 'react';
import movies from './movies';

function MovieNames(props){
    const movieNames = Object.keys(movies[props.chosenGenre])
    return(<select onChange={props.pickMovie}>

        {movieNames.map((name, i) => <option key={i} value={name} >{name}</option>)}
        
    </select>)
}

export default MovieNames;