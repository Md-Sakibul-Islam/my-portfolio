import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'
const Home = () => {
    return (
        <>
        <Header></Header>
        <About></About>
        <Skills></Skills>
       <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
       
          
        </>
    );
};

export default Home;