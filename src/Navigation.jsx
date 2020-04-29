import React from 'react';
import s from './Navigation.module.css';
import {Link, animateScroll as scroll} from "react-scroll";

const Navigation = () => {
    return (
        <div className={s.navigation}>
            <Link activeClass={s.active}
                  to="#0"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {900} className={s.link}> Main </Link>
            <Link activeClass={s.active}
                  to="#1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {900} className={s.link}> Skills </Link>
            <Link activeClass={s.active}
                  to="#2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {900} className={s.link}> Works </Link>
            <Link activeClass={s.active}
                  to={'#3'}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {900} className={s.link}> Contacts </Link>
        </div>
    );
}

export default Navigation;
