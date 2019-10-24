import React from 'react';
import s from './Skills.module.css';

const Skills = () => {
    return (
        <>
            <div className={s.skills}>
                My Skills
                <span className={s.row}>
                        <span className={s.large}>
                        </span>
                        <span className={s.large}>
                        <div className={s.medium}>EMPTY21</div>
                        </span>
                        <span className={s.large}>
                        <div className={s.small}>EMPTY</div>
                        <div className={s.small}>React</div>
                        <div className={s.medium}>Description skill</div>
                    </span>
                    </span>
            </div>
        </>
    );
}

export default Skills;
