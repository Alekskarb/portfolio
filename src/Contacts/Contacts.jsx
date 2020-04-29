import React from 'react';
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.contacts} id='#3'>
            <div className={s.main}>
                <span className={s.title}> Contacts </span>
                <form className={s.wrapper}>
                    {/*<label htmlFor={'contacts'}>Please, enter Your Name</label>*/}
                    <input className={s.form} placeholder='Your Name' name={'contacts'} type='text'/>
                    <input className={s.form} placeholder='e-mail' name={'contacts'} type='email'/>
                    <textarea className={s.form} placeholder='text message' name={'contacts'} />
                    <button className={s.buttonClick} type="submit" value={'SEND'} hidden={false}> SEND
                        {/*<a href="https://alekskarb.github.io/portfolio/"> SEND </a>*/}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
