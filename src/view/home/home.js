import React from 'react';
import Intro from '../../components/intro/intro';
import About from '../about/about';
import Education from '../education/education';
import Projects from '../projects/projects';
import Skills from '../skills/skills';

const Home = () => {
    return (
        <div className=''>
            <Intro />
            <About />
            <Education />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;