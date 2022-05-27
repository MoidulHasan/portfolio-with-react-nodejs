import React from "react";
import aboutStyle from './about.module.css';
import antu from "../../images/Moidul Hasan Khan.png"
import stopstalk from "../../images/StopStalk.png"

const About = (props) => {
    return (
        <div className={`${aboutStyle.main} text-light`} id="about">
            <div className={`row`}>
                <div className="col-12 col-lg-6">
                    <h2 className="text-info text-uppercase"><span className="text-light">01.</span> About Me</h2>
                    <p className="fs-4 mt-5 ">
                        Hello! I'm Moidul Hasan Khan, a self-motivated, dedicated full-stack web developer. My core skill is based on JavaScript and PHP, I love to do most things using them. I’m proficient in Data Structures and Algorithms. Happy to learn new languages and technologies. I have done competitive programming in my university life. I have solved more than 800 problems in different online judges like codeforces, hackerrank, LightOj and participated in several programming contests and won prizes. I am available for any kind of job opportunity that suits my interests.
                    </p>
                    <div className={`d-flex justify-content-start`}>
                        <a href="https://www.linkedin.com/in/moidul-hasan-khan/" target="_blank" rel="noreferrer noopener">
                            <i class="fa-brands fa-linkedin fs-1 text-primary me-1"></i>
                        </a>
                        <a href="https://github.com/MoidulHasan" target="_blank" rel="noreferrer noopener">
                            <i class="fa-brands fa-github-square fs-1 text-primary me-1"></i>
                        </a>

                        <a href="skype:antu.khan.988?chat" target="_blank" rel="noreferrer noopener">
                            <i class="fa-brands fa-skype fs-1  text-primary me-1"></i>
                        </a>

                        <a href="https://www.stopstalk.com/user/profile/Antukhan988" target="_blank" rel="noreferrer noopener">
                            <img src={stopstalk} className={`${aboutStyle.stopstalk}`} alt="stops talk profile" />
                        </a>

                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <img className={`${aboutStyle.profile}`} src={antu} alt="Moidul Hasan Khan" />
                </div>
            </div>


        </div >
    );
};

export default About;