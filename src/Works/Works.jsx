import React from 'react';
import s from './Works.module.css';
import {Rotate} from "react-reveal";

const Works = (props) => {
    return (
        <div className={s.works} id='#2'>
            <div className={s.container}>
                <span className={s.title}> My Works </span>
                <div className={s.wrap}>
                    {props.work.map(w =>
                        <div className={s.imgWrapper} key={w.id}>

                                <Rotate top left>
                                    <div className={s.image}
                                         style={{backgroundImage: 'url(' + `${w.icon}` + ')'}}></div>
                                </Rotate>
                                <button className={s.buttonClick}>
                                    <a href={w.reference}> WATCH </a>
                                </button>


                            <span> {w.name} </span>
                            <span> {w.description} </span>
                        </div>)}

                </div>
            </div>
        </div>
    );
};
export default Works;