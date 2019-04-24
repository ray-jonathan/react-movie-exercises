import React from 'react';
import './App.css';
import Genres from './Genres'
import MovieNames from './MovieNames'
import Actors from './Actors'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      genre: '',
      movie: ''
    }

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h3>Choose genre: <Genres pickGenre={this._genreHandler}></Genres></h3>
          {this.state.genre?<h3>Choose movie: <MovieNames pickMovie={this._movieHandler} chosenGenre={this.state.genre} /> </h3> : <></>}
          {this.state.movie?<> <h3>Actors: </h3><Actors chosenGenre={this.state.genre} chosenMovie={this.state.movie} /> </>: <></>}
        </header>
      </div>
    );
  }

  _genreHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      genre: e.target.value,
      movie: ''
    })
  }
  _movieHandler = (e) => {
    this.setState({
      movie: e.target.value
    })
  }
}

export default App;
