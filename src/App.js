import React from 'react';
import './App.css';
import {Navigation} from './components/Navigation'
import { Header } from './components/Header'
import ProjectSlider from './components/ProjectSlider'
import {About} from './components/About'
import {Faq} from './components/Faq'
import {SocialMedia} from './components/SocialMedia'
import {Footer} from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Header/>
      <ProjectSlider />
      <About />
      <Faq />
      <SocialMedia />
      <Footer />
    </React.Fragment>
  );
}

export default App;
