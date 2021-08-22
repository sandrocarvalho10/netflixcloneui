import React from 'react'
import './Header.css'
import logo from './../images/logoNetflix.png'
import perfil from './../images/perfil.png'

export default ({black}) => {
    return (
        <header className={black ? 'header--black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="Logo da Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={perfil} alt="" />
                </a>
            </div>
        </header>
    )
}