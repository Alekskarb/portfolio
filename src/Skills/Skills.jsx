import React from 'react';
import s from './Skills.module.css';
import {Flip} from "react-reveal";

const Skills = (props) => {

    return <div className={s.skills} id='#1'>
        <div className={s.container}>
            <h2 className={s.title}> My Skills </h2>
            <Flip left>
                <div className={s.skillWrap}>{props.skills.map(sk =>
                    <div key={sk.id}
                         className={s.block}>
                        <div className={s.icon}>
                            <img src={sk.icon} width='80%' alt='the world is mine'/>
                        </div>
                        <h3> {sk.title} </h3>
                        <span> {sk.description} </span>
                    </div>)}
                </div>
            </Flip>
        </div>
    </div>
};
export default Skills
