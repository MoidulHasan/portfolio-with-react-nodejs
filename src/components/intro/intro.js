import React from 'react';
import introStyles from './intro.module.css'
import intoImg from '../../images/home-intro.svg';

const Intro = () => {
    return (
        <div className={`${introStyles.intro} text-light row`}>
            <div className='col-12 col-lg-6 pt-5'>
                <h3 className='text-info'>Hi, I am</h3>
                <h1 className={`${introStyles.name}`}>Moidul Hasan Khan</h1>
                <h1 className={`${introStyles.designation} text-info`}>Full Stack Developer</h1>
                <ul className={`${introStyles.list}`}>
                    <li>Web Developer</li>
                    <li>Competitive Programmer</li>
                </ul>
                <div className='mt-3'>
                    <button className={`${introStyles.customBtn1}`}>Get Resume</button>
                    <button className={`${introStyles.customBtn2}`}>About Me</button>
                </div>
            </div>
            <div className={`${introStyles.introImg} col-12 col-lg-6`}>
                <img className={`w-75`} src={intoImg} alt='intro' />
            </div>

        </div>
    );
};

export default Intro;