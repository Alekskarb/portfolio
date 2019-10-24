import React from 'react';
import s from './Works.module.css';

const Works = () => {
    return (
        <>
            <div className={s.works}>
                My Jobs
                <span className={s.row}>
                        <span className={s.large}>
                        <div className={s.medium}>Projects</div>
                        </span>
                        <span className={s.large}>
                            <img className={s.img} src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/45814685_546994122395238_480215873844412416_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=106&oh=a799e0a13113c864e4b92597f9d0f612&oe=5E2F6C56&ig_cache_key=MTkxMzM0ODQzODAxNjk3NjAwMQ%3D%3D.2"/>
                        <div className={s.watch}>Watch</div>
                        <div className={s.small}>Project Name</div>
                        <div className={s.medium}>Description</div>
                        </span>
                </span>
            </div>
        </>
    );
}

export default Works;