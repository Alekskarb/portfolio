import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={s.navigation}>
            <a href={''} className={s.link}> Main </a>
            <a href={'#1'} className={s.link}> Skills </a>
            <a href={'#2'} className={s.link}> Jobs </a>
            <a href={'#3'} className={s.link}> Contacts </a>
        </div>
    );
}

export default Navigation;
