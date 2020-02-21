import React from 'react';
import s from './Footer.module.css';

const Footer =(props)=> {
  return (
        <div className={s.footer}>
            <div className={s.main}>
                <span className={s.title}> Alex Korbutovski </span>
                <div className={s.wrapper}>
                     {props.footer.map(f=><div key={f.id} className={s.icon}><img src={f.icon} width='100%' alt='social nets'/> </div>)}
                </div>
                <span className={s.title}> All Rights Reserved, 2019 </span>
            </div>
        </div>
    );
}

export default Footer;
