import React from 'react';
import s from './Works.module.css';
import {Rotate} from "react-reveal";

const Works = (props) => {
    return (
        <div className={s.works} id='#2'>
            <div className={s.container}>
                <span className={s.title}> My Works </span>
                <Rotate top left>
                    <div className={s.wrap}>
                        {props.work.map(w => <div className={s.block} key={w.id}>
                            <div className={s.image} style={{ backgroundImage: 'url('+ `${w.icon}` +')'}}>
                                <button className={s.buttonClick}>
                                    <a href={w.reference} > WATCH </a>
                                </button>
                            </div>
                            <span> {w.name} </span>
                            <span> {w.description} </span>
                        </div>)}
                    </div>
                </Rotate>
            </div>
        </div>
    );
};
export default Works;