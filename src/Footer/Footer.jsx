import React from 'react';
import s from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={s.footer} id={'#5'}>
            <div className={s.main}>
                <span className={s.title}> Alex Korbutovski </span>
                <div className={s.wrapper}>
                    {
                        props.footer.map(f => <a href={f.reference} key={f.id} className={s.icon}
                                                 style={{backgroundImage: 'url(' + `${f.icon}` + ')'}}> </a>)
                    }
                </div>
                <span>
                    <h6>
                        All Rights Reserved 2019
                    </h6>
                     </span>
            </div>
        </div>
    );
}

export default Footer;
