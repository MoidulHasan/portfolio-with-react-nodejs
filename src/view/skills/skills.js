import React from "react";
import Skill from "../../components/skill/skill";
import skillStyle from './skills.module.css';

const Skills = (props) => {
    const skillist = [
        "JavaScript",
        "PHP",
        "C",
        "C++",
        "Python",
        "SQL",
        "Node JS",
        "Express JS",
        "React JS",
        "Mongoose",
        "MongoDB",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "jQuery",
        "Git",
        "GitHub",
        "Algorithm Design & Analysis",
        "Data Structure",
        "Problem Solving"

    ];
    return (
        <div className={`${skillStyle.main} text-light`} id="skills">
            <h2 className="text-info text-uppercase"><span className="text-light">03.</span> My Skills</h2>
            <div className={`row`}>
                {skillist.map((skill) => (
                    <Skill skill={skill} />
                ))}
            </div>
        </div>
    );
}

export default Skills;