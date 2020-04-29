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
import redux from './img/redux.svg'
import linkedin from './img/linkedin.svg'
import Telegram from './img/telegram.svg'
import codewars from './img/codewars.svg'
import Gmail from './img/gmail.svg'
import project1 from './img/1.jpg'
import project2 from './img/2.jpg'
import project3 from './img/3.jpg'
import Particles from "react-particles-js";

class App extends React.Component {
    state = {
        work: [{
            id: 0,
            name: 'counter',
            description: 'Use React, ',
            icon: project1,
            reference: 'https://github.com/Alekskarb/React_SN',
            // reference: 'https://alekskarb.github.io/React_SN/',
        }, {
            id: 1,
            name: 'social net',
            description: 'Use React-Redux, thunk, axios',
            icon: project2,
            reference: 'https://github.com/Alekskarb/redux',
            // reference: 'https://alekskarb.github.io/redux/',
        }, {
            id: 2,
            name: 'redux',
            description: 'calculator',
            icon: project3,
            reference: 'https://github.com/Alekskarb/Thunk',
            // reference: 'https://alekskarb.github.io/Thunk/',
        },],
        skills: [{
            id: 0,
            title: 'HTML5',
            description: 'The DOCTYPE declaration & character encoding declaration is very simple. ' +
                'New semantic elements, attributes of form elements, graphic and multimedia elements',
            icon: html
        },
            {
                id: 1,
                title: 'CSS3',
                description: 'New selectors, pseudo-elements, pseudo-classes, and combinators, ' +
                    'support new ways of describing colours, opacity, border-radius, box & text-shadow, ' +
                    'linear & radial  Gradients, Multiple Background Images, ',
                icon: css
            },
            {
                id: 2,
                title: 'ECMAScript-6',
                description: 'New string & Arrays features, Callback, Recursion, Modules, Classes, ' +
                    'Arrow functions, Variables and scoping,  Destructuring, Closures, Regular Expressions,' +
                    ' Promises, Context, this, async/await, map/reduce/forEach',
                icon: jas
            },
            {
                id: 3,
                title: 'the best JavaScript framework among web developers',
                description: 'Additional syntax in JSX, Components, One-way Data Binding, Virtual DOM - ' +
                    'ideal solution to high-load application, Simplicity, Performance',
                icon: react
            },
            {
                id: 3,
                title: ' THREE fundamental principles',
                description: 'Single source of truth, State is read-only, Changes are made with pure functions',
                icon: redux
            },],
        footer: [
            {id: 0, title: 'linkedin', icon: linkedin, reference: 'https://www.linkedin.com/in/skarb/',},
            {id: 1, title: 'Gmail', icon: Gmail, reference: 'https://github.com/Alekskarb',},
            {id: 2, title: 'Telegram', icon: Telegram, reference: 'https://t.me/Alekskarb',},
            {
                id: 3,
                title: 'codewars',
                icon: codewars,
                reference: 'https://www.codewars.com/users/Alekskarb/completed',
            },
        ]
    };

    render() {
        let parts = {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 600,
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
                <Skills skills={this.state.skills}/>
                <Works work={this.state.work}/>
                <Offer/>
                <Contacts/>
                <Footer footer={this.state.footer}/>
            </div>
        )
    }
}

export default App;
