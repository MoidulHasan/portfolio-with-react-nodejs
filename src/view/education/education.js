import React from "react";
import eduStyle from './education.module.css';
import eduMetarial from "../../images/edu-metarial.svg"
import gradCap from "../../images/graduation-cap-solid.svg"

const Education = (props) => {
    return (
        <div className={`${eduStyle.main} text-light`} id="education">
            <div className="row d-flex justify-content-center">
                <h2 className="text-info text-uppercase"><span className="text-light">02.</span> Education</h2>
                <div className={`row mt-1 p-xl-5 h-100 justify-content-between `}>

                    <div className={`col-12 col-md-4`}>
                        <img src={eduMetarial} className={`w-100`} alt="education" />
                    </div>

                    <div className={`col-12 col-md-7 ms-md-1 p-0 m-0 row py-2 ${eduStyle.degContainer}`}>

                        <div className={`col-12 row p-0 my-2 mx-0 d-flex align-items-center  ${eduStyle.degree}`}>
                            <div className={`col-2 d-md-flex justify-content-center align-items-center d-none `}>
                                <img src={gradCap} className={`w-75`} alt="graduation cap" />
                            </div>
                            <div className="col-12 col-md-10">
                                <h4 className={`text-danger`}>May 2018 - April 2022</h4>
                                <h3 className={`text-light`}>B.Sc. in CSE</h3>
                                <h2 className={`${eduStyle.institute}`}>International University of Business Agriculture and Technology</h2>
                            </div>
                        </div>
                        <div className={`col-12 row p-0 my-2 mx-0 d-md-flex justify-content-center align-items-center ${eduStyle.degree}`}>
                            <div className={`col-2 d-md-flex justify-content-center align-items-center d-none `}>
                                <img src={gradCap} className={`w-75`} alt="graduation cap" />
                            </div>
                            <div className="col-12 col-md-10">
                                <h4 className={`text-danger`}>2015 - 2017</h4>
                                <h3 className={`text-light`}>Higher Secondary Certificate(HSC)</h3>
                                <h2 className={`${eduStyle.institute}`}>Bangataj College</h2>
                            </div>
                        </div>

                        <div className={`col-12 row p-0 my-2 mx-0 d-md-flex justify-content-center align-items-center ${eduStyle.degree}`}>
                            <div className={`col-2 d-md-flex justify-content-center align-items-center d-none `}>
                                <img src={gradCap} className={`w-75`} alt="graduation cap" />
                            </div>
                            <div className="col-12 col-md-10">
                                <h4 className={`text-danger`}>2010 - 2015</h4>
                                <h3 className={`text-light`}>Secondary School Certificate(SSC)</h3>
                                <h2 className={`${eduStyle.institute}`}>Chardurlav Khan Abdul Hye Sarkar High School</h2>
                            </div>
                        </div>

                    </div>



                </div>
            </div>


        </div>
    );
};

export default Education;