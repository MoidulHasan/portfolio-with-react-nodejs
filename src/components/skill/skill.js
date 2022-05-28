import React from 'react';
import skillStyle from "./skill.module.css";


const Skill = ({ skill }) => {

    const image = require(`../../images/skills/${skill}.${"svg"}`);
    // const mongoStyle = skill === "Mongoose" ? skillStyle.mongooseStyle : "";
    return (
        <div className={`col-4 col-sm-3 col-md-2 col-lg-1  m-3`}>
            <div className={`${skillStyle.wrap}`}>
                <div className={`${skillStyle.iconBox}`}>
                    <div id='icon' className={`${skillStyle.icon}`}>
                        <img className={` `} src={image} alt={`${skill}`} />
                    </div>
                </div>
                <p className='text-center pb-1' >{skill}</p>
            </div>

        </div>
    );
};

export default Skill;