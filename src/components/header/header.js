import React from 'react';
import { NavLink, HashRouter as Link } from 'react-router-dom';
import headerStyle from './header.module.css';
import logo from '../../images/logo.svg'
const Header = () => {
    return (
        <div className={`${headerStyle.header} d-flex justify-content-between shadow position-fixed w-100`}>
            <div className={`text-light m-2 ms-5`}>
                <NavLink to={'#home'} className={`text-decoration-none`}>
                    {/* <h1 className={`m-2 text-light`}>Home</h1> */}
                    <img className='h-100' src={logo} alt="Moidul Hasan Khan" />
                </NavLink>
            </div>
            <div className={`d-flex align-items-center justify-content-between pe-5`}>
                <div className={`text-light me-3`}>
                    <NavLink to={'#about'} className={`text-decoration-none`}>
                        <h6 className={`text-light text-uppercase`}>01.<span className='text-info'> About Me </span></h6>
                    </NavLink>
                </div>
                <div className={`text-light  me-3`}>
                    <NavLink to={'#education'} className={`text-decoration-none`}>
                        <h6 className={`text-light text-uppercase`}>02.<span className='text-info'> Education </span></h6>
                    </NavLink>
                </div>
                <div className={`text-light  me-3`}>
                    <NavLink to={'#services'} className={`text-decoration-none`}>
                        <h6 className={`text-light text-uppercase`}>03.<span className='text-info'> Skills </span></h6>
                    </NavLink>
                </div>
                <div className={`text-light  me-3`}>
                    <NavLink to={'#projects'} className={`text-decoration-none`}>
                        <h6 className={`text-light text-uppercase`}>04.<span className='text-info'> Projects </span></h6>
                    </NavLink>
                </div>
                <div className={`text-light  me-3`}>
                    <NavLink to={'#contact'} className={`text-decoration-none`}>
                        <h6 className={`text-light text-uppercase`}>05.<span className='text-info'> Contact </span></h6>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;