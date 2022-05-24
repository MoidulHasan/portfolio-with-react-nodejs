import React from "react";
import skillStyle from './skills.module.css';

const Skills = (props) => {
    const skills = {
        programming: [
            "JavaScript",
            "PHP",
            "C",
            "C++",
            "Python",
            "SQL"
        ],
        backend: [

        ],
        frontend: [

        ],
        database: [
            "MongoDB",
            "MySQL"
        ],
        others: [

        ]
    }
    return (
        <div className={`${skillStyle.main} text-light`} id="skills">
            <h2 className="text-info text-uppercase"><span className="text-light">02.</span> My Skills</h2>
            <div className={`row`}>
                <div className="col-12 col-md-4">

                </div>
            </div>
        </div>
    );
}

export default Skills;