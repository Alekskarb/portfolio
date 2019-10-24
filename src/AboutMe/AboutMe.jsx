import React from 'react';
import s from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <div className={s.aboutMe}>

            <div className={s.greeting}>
                Hi, i'm an Alex Korbutovski. I am a frontend-developer
            </div>
            <div>
                <img className={s.img}
                    src="https://scontent-frx5-1.cdninstagram.com/vp/a5bbd3423e3bb82ae01a25db07fa16c8/5E0914B0/t51.2885-19/s150x150/19052178_158575998016889_3547556210976751616_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com"
                    alt=""/>
            </div>
        </div>
    );
}

export default AboutMe;
