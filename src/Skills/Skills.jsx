import React from 'react';
import s from './Skills.module.css';
import {Flip} from "react-reveal";

const Skills = (props) => {

    return <div className={s.skills} id={1}>
        <div className={s.container}>
            <span className={s.title}> My Skills </span>
            <Flip left>
                <div className={s.skillWrap}>{props.skills.map(sk =>
                    <div key={sk.id}
                         className={s.block}>
                        <div className={s.icon}>
                            <img src={sk.icon} width='100%' alt='the world is mine'/>
                        </div>
                        <h2> {sk.title} </h2>
                        <span> {sk.description} </span>
                    </div>)}
                </div>
            </Flip>
        </div>
    </div>
};
export default Skills
