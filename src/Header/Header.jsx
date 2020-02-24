import React from 'react';
import s from './Header.module.css';
import Navigation from "../Navigation";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.main}>
                <Navigation/>
            </div>
        </div>
    );
}

export default Header;
