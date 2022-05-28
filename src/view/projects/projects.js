import React from "react";
import Project from "../../components/project/project";
import projectStyle from "./projects.module.css"

const Projects = (props) => {
    return (
        <div className={`${projectStyle.main} text-light`} id="project">
            <h2 className="text-info text-uppercase mb-5"><span className="text-light">04.</span> Projects</h2>

            <div className={`row `}>

                <Project image={"checkout-page.png"} />
                <Project image={"checkout-page.png"} />
                <Project image={"checkout-page.png"} />

                <Project image={"checkout-page.png"} />

                <Project image={"checkout-page.png"} />

                <Project image={"checkout-page.png"} />
                <Project image={"checkout-page.png"} />

            </div>
        </div>
    )
};

export default Projects;