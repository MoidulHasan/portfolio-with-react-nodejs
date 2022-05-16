import React from 'react';
import { NavLink } from 'react-router-dom';
import headerStyle from './header.module.css'
const Header = () => {
    return (
        <div className={`${headerStyle.header} d-flex justify-content-between shadow position-fixed w-100`}>
            <div className={`text-light m-2 ms-5`}>
                <NavLink to={'/'} className={`text-decoration-none`}>
                    <h1 className={`m-2 text-light`}>Home</h1>
                </NavLink>
            </div>
            <div className={`d-flex align-items-center justify-content-between pe-5`}>
                <div className={`text-light me-3`}>
                    <NavLink to={'./about'} className={`text-decoration-none`}>
                        <h5 className={`text-light`}>About Me</h5>
                    </NavLink>
                </div>
                <div className={`text-light  me-3`}>
                    <NavLink to={'./services'} className={`text-decoration-none`}>
                        <h5 className={`text-light`}>Services</h5>
                    </NavLink>
                </div>
                <div className={`text-light  me-3`}>
                    <NavLink to={'./projects'} className={`text-decoration-none`}>
                        <h5 className={`text-light`}>Projects</h5>
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;