import React from 'react'
import "./Header.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://i.imgur.com/OwUxspw.png"/>

            <div className="header__music"><MusicNoteIcon/></div>

            <div className="header__profile"><AccountCircleIcon/></div>
        </div>
    )
}

export default Header
