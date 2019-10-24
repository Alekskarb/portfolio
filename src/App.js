import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import Contacts from "./Contacts/Contacts";
import Freelance from "./Freelance/Freelance";
import Works from "./Works/Works";
import Skills from "./Skills/Skills";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App;
