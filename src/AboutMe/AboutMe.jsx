import React from 'react';
import s from './AboutMe.module.css';
import pict from './AVATAR.svg';

const AboutMe = () => {
    return (
        <div className={s.aboutMe}>
            <div className={s.main}>
                <div className={s.greeting}>
                    <span className={s.hello}> Hello ) </span>
                    <span> I am  ALEX <span> KORBUTOVSKI </span> </span>
                    <h1> a frontend-developer </h1>
                </div>
                <div className={s.img}>
                    <img src={pict} alt='de sign'/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
