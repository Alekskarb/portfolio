import React from 'react';
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.main}>
                <span className={s.title}> Contacts </span>
                <form className={s.wrapper}>
                    <input className={s.form} placeholder='Your Name' type='text'/>
                    <input className={s.form} placeholder='e-mail' type='e-mail'/>
                    <textarea className={s.form} title='text message'/>
                    <button className={s.buttonClick}>
                        <a href="https://github.com/Alekskarb/Thunk.git"> SEND </a>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
