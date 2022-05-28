import React from 'react';
import projectStyle from "./project.module.css";

const Project = ({ image }) => {

    const banner = require(`../../images/projects/${image}`);
    return (
        <div className="col-12 col-lg-6 d-flex justify-content-center my-5">
            <div className={`card ${projectStyle.card}`}>
                <div className={`${projectStyle.banner}`} >
                    <img src={banner} alt={image} />
                </div>
            </div>
        </div>
    );
};

export default Project;