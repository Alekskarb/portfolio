import React from 'react';
import s from './Works.module.css';

const Works = (props) => {
    return (
        <div className={s.works}>
            <div className={s.container}>
                <span className={s.title}> My Jobs </span>
                <div className={s.wrap}>
                    {props.work.map(w => <div className={s.block} key={w.id}>
                    <div className={s.image}>
                        <button className={s.buttonClick}>
                            <a href='https://alekskarb.github.io/React_SN/'> Watch </a>
                        </button>
                    </div>
                        <span> {w.name} </span>
                        <span> {w.description} </span>
                    </div>)}
                </div>
            </div>
        </div>
    );
}
export default Works;
{/*<img src={w.icon} className={s.img} alt='my job'/>*/}