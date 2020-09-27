import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <img style={{height:"70vh", width:"100%"}}src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg" className="img img-fluid" alt="Responsive image"/>
                </div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pills">
                        <a className="navbar-brand" href="#"></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/movies">Movies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Search</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
        );
    }
}

