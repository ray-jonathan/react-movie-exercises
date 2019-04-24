import React from 'react';
import './App.css';
import Genres from './Genres'

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
          <h3>Choose genre: <Genres></Genres></h3>
          {this.state.genre? <></> : <></>}
          {this.state.movie? <></> : <></>}
        </header>
      </div>
    );
  }

  _genreHandler = (e) => {
    this.setState({
      genre: e.target.value
    })
  }
  _movieHandler = (e) => {
    this.setState({
      movie: e.target.value
    })
  }
}

export default App;
