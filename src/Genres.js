import React from 'react';
import movies from './movies';

class Genres extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            genre: ''          
        }
    }
    componentDidMount(){
        console.log("CDM");
        this.setState({
            genre: Object.keys(movies)[0],
            movie: ''
        })
    }
    render(){
        const movieGenres = Object.keys(movies)
        console.log("Render");
        console.log(this.state.genre);
        return(<select onChange={this.props.pickGenre}>
            {movieGenres.map((genre, i) => 
            <option  key={i} value={genre}>
                {genre}
            </option>)}
        </select>)
    }
}

export default Genres;