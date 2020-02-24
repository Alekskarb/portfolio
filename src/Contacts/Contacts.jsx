import React from 'react';
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.contacts} id='#3'>
            <div className={s.main}>
                <span className={s.title}> Contacts </span>
                <form className={s.wrapper}>
                    <input className={s.form} placeholder='Your Name' type='text'/>
                    <input className={s.form} placeholder='e-mail' type='e-mail'/>
                    <textarea className={s.form} placeholder='text message'/>
                    <button className={s.buttonClick}>
                        <a href="https://alekskarb.github.io/portfolio/"> SEND </a>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
