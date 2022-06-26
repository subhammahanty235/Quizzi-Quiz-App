import React from 'react'
import logo from '../images/logo_image.png'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <a className="navbar-brand navbar-header" href="/"> QuizziPlay</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a href='https://github.com/subhammahanty235/Quizzi-Quiz-App' className="btn btn-outline-success btn-md">Github</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar