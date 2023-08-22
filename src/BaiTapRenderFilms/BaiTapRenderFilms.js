import React, { Component } from 'react'
import datafilms from '../Data/DataFilms.json'

export default class BaiTapRenderFilms extends Component {

    renderFilms = () => {
        let renderComponent = datafilms.map((film, index) => {
            return <div className='col-3' key={index}>

                <div className="card text-left mx-5 bg-primary text-white mb-5" style={{ width: '200px' }}>
                    <img className="card-img-top" style={{ backgroundImage: 'url(./background/avengers.jpg)', width: '200px', height: '350px' }} alt={film.tenPhim} />
                    <div className="card-body">
                        <h4 className="card-title" style={{ fontSize: '17px', height: '50px' }}>{film.tenPhim}</h4>
                        <p className="card-text" style={{ fontSize: '13px' }}> <p>{film.moTa.length > 80 ? film.moTa.substring(0, 80) + '...' : film.moTa}</p>
                        </p>
                    </div>
                </div>

            </div>

        });
        return renderComponent;
    }


    render() {
        return (
            <div className='container-fluid px-0'>
                <div style={{ backgroundImage: 'url(./background/avengers.jpg)', minHeight: '2000px' }}>
                    <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px' }}>
                        <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'rgba(87,83,149,0.8)' }}>
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                                            <a className="dropdown-item" href="#">Action 1</a>
                                            <a className="dropdown-item" href="#">Action 2</a>
                                        </div>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                        <div className='container-fluid mt-5'>
                            <div className='row'>
                                {this.renderFilms()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
