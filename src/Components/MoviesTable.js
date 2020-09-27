import React from 'react';

class MoviesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies:[
                {
                    "name":"Fight Club",
                    "genre":"Thriller",
                    "rating":"9/10"
                },
                {
                    "name":"Godfather",
                    "genre":"Crime",
                    "rating":"9/10"
                },
                {
                    "name":"Perks of being a wallflower",
                    "genre":"Thriller",
                    "rating":"9/10"
                }
            ]
        }
    }

    addMovie(){
        // TODO: Get Body

        this.setState((state, movie)=>({
            movies :[...state.movies, movie]
        }));
    }

    render() {
        return (
            <tbody>
                {/* TODO: Add form and button to get input and use addMovie event handler */}
                {this.state.movies.map(movie => {
                    return(
                    <tr>
                        <td>{movie.name}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.rating}</td>
                    </tr>
                );})}
            </tbody>
        );
    }
}

export default class MoviesTable extends React.Component {
    render() {
        return (
            <table className="table table-light container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <MoviesList />
            </table>
        );
    }
}