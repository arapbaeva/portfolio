import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Hired} from "./components/hired/Hired";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Particle} from "./common/components/Particle";

function App() {
    return (
        <div className="App">
            <div>
                <Particle/>
            </div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Hired/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
