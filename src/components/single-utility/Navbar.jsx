import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);
    const user = false;

    const updateWidth = () => {
        let width = window.innerWidth;
        setScreenWidth(width);
    };

    const debounce = (func, ms) => {
        let timer;
        return function () {
            let context = this,
                args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, ms);
        };
    };

    let optimizedUpdateWidth = debounce(updateWidth, 200);
    window.addEventListener("resize", optimizedUpdateWidth);

    const handleMenuClick = () => {
        const menuBtn = document.querySelector(".MENU-BTN");
        setIsOpen(!isOpen);
        if (isOpen) {
            menuBtn.classList.add("MENU-BTN__Open");
        } else {
            menuBtn.classList.remove("MENU-BTN__Open");
        }
    };

    const renderHamburgerMenu = () => {
        let displayNone = !isOpen ? "" : "displayNone";
        if (screenWidth <= 639) {
            return (
                <div
                    className='MENU-BTN relative flex h-10 w-10 items-center'
                    onClick={handleMenuClick}
                >
                    <div className='MENU-BTN__BURGER'></div>
                </div>
            );
        }
    };

    const renderMenu = () => {
        if (screenWidth > 639) {
            return (
                <>
                    <ul
                        className='ml-5 flex justify-between
                     space-x-4 lg:space-x-9'
                    >
                        <li>
                            <Link
                                to='/'
                                exact='true'
                                className='hover:underline'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/'
                                exact='true'
                                className='hover:underline'
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/contact-us'
                                exact='true'
                                className='hover:underline'
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </>
            );
        }
    };

    return (
        <nav
            className='NAVBAR flex flex-wrap 
                items-center justify-between bg-gradient-to-r from-[#1b1f27]
                via-[#1A1F2C] to-[#11151F] py-2 text-white'
        >
            <div
                className='CONTENT container mx-auto 
                  flex items-center justify-between'
            >
                <div className='LOGO w-[3vw]'>
                    <h2>Performance Refiner</h2>
                </div>
                {renderMenu()}
                <div
                    className='SIGN-MENU-CONTAINER 
                        flex justify-between gap-x-[10px]'
                >
                    {!user ? (
                        <Link
                            to='login'
                            exact='true'
                            className='SIGN-IN rounded-full border-2 border-cyan-500
                      px-3 py-2
                    text-xs hover:bg-cyan-500 hover:shadow-md 
                      hover:shadow-cyan-500/50 sm:text-sm'
                        >
                            Sign In
                        </Link>
                    ) : (
                        ""
                    )}
                    {renderHamburgerMenu()}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
