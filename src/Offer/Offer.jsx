import React from 'react';
import s from './Offer.module.css';

const Offer = () => {
    return (
        <div className={s.freelance}>
            <div className={s.container}>
                <div className={s.wrap}>
                    <span className={s.title}>
                        Looking for Offer
                    </span>
                    <div>
                        <button className={s.buttonClick}>
                            <a href="https://www.linkedin.com/in/skarb/"> Hire Me </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
