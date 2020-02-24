import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import Contacts from "./Contacts/Contacts";
import Offer from "./Offer/Offer";
import Works from "./Works/Works";
import Skills from "./Skills/Skills";
import html from './img/html.svg'
import css from './img/css.svg'
import jas from './img/JS.svg'
import react from './img/react.svg'
import linkedin from './img/linkedin.svg'
import Telegram from './img/telegram.svg'
import Viber from './img/viber.svg'
import Gmail from './img/gmail.svg'
import project1 from './img/1.jpg'
import project2 from './img/2.jpg'
import project3 from './img/3.jpg'
import Particles from "react-particles-js";
import {Link, animateScroll as scroll} from "react-scroll";

class App extends React.Component {
    state = {
        work: [{
            id: 0,
            name: 'HTML',
            description: 'counter',
            icon: project1
        }, {
            id: 1,
            title: 'HTML',
            description: 'social net',
            icon: project2
        }, {
            id: 2,
            title: 'HTML',
            description: 'calculator',
            icon: project3
        },],
        skills: [{
            id: 0,
            title: 'HTML',
            description: 'normal',
            icon: html
        },
            {
                id: 1,
                title: 'CSS',
                description: 'good',
                icon: css
            },
            {
                id: 2,
                title: 'Javascript',
                description: 'very good',
                icon: jas
            },
            {
                id: 3,
                title: 'React',
                description: 'exellent',
                icon: react
            },],
        footer: [{id: 0, title: 'linkedin', icon: linkedin},
            {id: 1, title: 'Gmail', icon: Gmail},
            {id: 2, title: 'Telegram', icon: Telegram},
            {id: 3, title: 'Viber', icon: Viber},
        ]
    };

    render() {
        let parts = {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 3000,
                    }
                }
            }
        };
        return (
            <div className="App">

                    <Particles className='particles'
                               params={parts}/>
                    <Header/>
                    <AboutMe/>
                    <Skills to='/#1' skills={this.state.skills}/>
                    <Works work={this.state.work}/>
                    <Offer/>
                    <Contacts/>
                <Link activeClass="active"
                      to="/portfolio/#3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration= {500}>
                    <Footer footer={this.state.footer}/>
                </Link>
            </div>
        )
    }
}

export default App;
