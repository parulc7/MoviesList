import React from 'react';
import './App.css';
import Header from './Components/Header';
import MoviesTable from './Components/MoviesTable';
import Landing from './Components/Landing';
import About from './Components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component{
  render(){
    return (
      <div className="App container-fluid">
        <Router>
          <Header/>
          <Route exact path="/"><Landing/></Route>
          <Route path='/movies'><MoviesTable/></Route>
          <Route path="/about"><About/></Route>
        </Router>
      </div>
    );
  }
}


export default App;
