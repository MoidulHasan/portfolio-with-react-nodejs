import React from 'react';
import skillStyle from "./skill.module.css";


const Skill = ({ skill }) => {

    const image = require(`../../images/skills/${skill}.${skill === "Mongoose" ? "png" : "svg"}`);
    const mongoStyle = skill === "Mongoose" ? skillStyle.mongooseStyle : "";
    return (
        <div className={`col-4 col-sm-3 col-md-2 col-lg-1 p-1`}>
            <div className={`${skillStyle.wrap}`}>
                <div className={`${skillStyle.iconBox}`}>
                    <div id='icon' className={`${skillStyle.icon}`}>
                        <img className={`w-100 ${mongoStyle}`} src={image} alt={`${skill}`} />
                    </div>
                </div>
                <h3 className='text-center pb-3' >{skill}</h3>
            </div>

        </div>
    );
};

export default Skill;