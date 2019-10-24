import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <>
        <div className={s.header}>
                <span className={s.main}>
                    <a href={''}> Main </a>
                    <a href={''}> Skills </a>
                    <a href={''}> Jobs </a>
                    <a href={''}> Contacts </a>
                </span>
            </div>
            </>
    );
}

export default Header;
