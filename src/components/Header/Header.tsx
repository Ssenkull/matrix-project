import React from 'react';

import './header.css';

import {ReactComponent as Logo} from '../../img/logo.svg'
import {ReactComponent as Person} from '../../img/person.svg';

interface HeaderProps {
  links: string[];
}

const Header: React.FC<HeaderProps> = ({ links}) => {
    return(
        <header className='header'>
            <div className="container">
            <div className="header__inner">
            <a href='/' className="logo">
                <Logo/>
            </a>
            <nav>
                <ul className='header-list'>
                {links.map((link, index) => (
                    <li key={index}>
                    <a href={link}>{link}</a>
                    </li>
                ))}
                </ul>
            </nav>
            <div className="header-btn">
                <button>Розрахуавти матрицю</button>
            </div>
            <a href='personal-space' className="icon">
                <Person/>
            </a>
            </div>
            </div>
        </header>
    )
}

export default Header;