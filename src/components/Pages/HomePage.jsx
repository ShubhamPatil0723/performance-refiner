import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as DonutChart } from "../../assets/DonutChart.svg";
import { ReactComponent as LineChart } from "../../assets/LineChart.svg";

const HomePage = () => {
    return (
        <div>
            <div
                className='HERO gradient-diagonal-background relative flex h-[50vh] flex-col 
                           items-center justify-center text-white xl:h-[70vh]'
            >
                <div className='CONTAINER flex w-[60vw] max-w-[29rem] flex-col gap-5 xl:max-w-[43rem]'>
                    <h1 className='gradient-diagonal-text text-3xl font-bold sm:text-5xl xl:text-7xl'>
                        Boost Your Students Performance Now
                    </h1>
                    <p className='text-base sm:text-lg xl:text-[1.35rem]'>
                        Know in which topic your students are weak and refine
                        them in that area.
                    </p>
                    <Link
                        to='/login'
                        exact='true'
                        className='SIGN-IN flex h-10 w-24 items-center justify-center self-end 
                             rounded-full bg-cyan-500
                             px-3 py-2 text-sm hover:shadow-md hover:shadow-cyan-500/50 
                             xl:h-14 xl:w-36 xl:text-[1.25rem]'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
            <div
                id='services'
                className='CONTENT container mx-auto mt-20 flex flex-col gap-28'
            >
                <div
                    className='SERVICE-INFO flex w-full flex-wrap items-center justify-center 
                                gap-8'
                >
                    <div className='SVG-CONTAINER w-full sm:w-[40%]'>
                        <DonutChart />
                    </div>
                    <div className='TEXT w-full sm:w-[50%]'>
                        <h1
                            className='HEADING text-center text-base font-bold sm:text-lg 
                                       xl:text-[1.35rem]'
                        >
                            Get analysis report based on students result
                        </h1>
                        <p className='INNER-HEADING font-medium xl:text-[1.25rem]'>
                            Follow These Steps
                        </p>
                        <ul className='SERVICE-LIST list-disc pl-6 font-medium xl:text-[1.25rem]'>
                            <li>
                                Insert topic of question that was asked in exam.
                            </li>
                            <li>
                                Give marks alloted to that question and marks
                                that student got for that question.
                            </li>
                            <li>Let the website do the magic</li>
                        </ul>
                        <h3 className='SERVICE-RESULT font-bold xl:text-[1.25rem]'>
                            Bang!! we got our reports
                        </h3>
                    </div>
                </div>
                <div
                    className='SERVICE-INFO flex w-full flex-wrap items-center justify-center 
                                gap-8'
                >
                    <div className='TEXT w-full sm:w-[40%]'>
                        <h1
                            className='HEADING text-center text-base font-bold sm:text-lg 
                                       xl:text-[1.35rem]'
                        >
                            Track performace on yearly basis
                        </h1>
                        <p className='INNER-HEADING font-medium xl:text-[1.25rem]'>
                            Compare performance on yearly basis Lets see whether
                            your new approach of teaching is working or not.
                        </p>
                    </div>
                    <div className='SVG-CONTAINER w-full sm:w-[40%]'>
                        <LineChart />
                    </div>
                </div>
                <div
                    className='CALL-OF-ACTION mx-auto flex flex-col items-center justify-center 
                                gap-3 sm:w-[60%]'
                >
                    <h1 className='HEADING w-full text-center text-3xl font-bold'>
                        What are you waiting for?
                    </h1>
                    <h1 className='HEADING mb-3 w-full text-center text-3xl font-bold'>
                        Get started <span className='text-cyan-500'>now</span>
                    </h1>
                    <Link
                        to='/login'
                        exact='true'
                        className='CALL-OF-ACTION-SIGNUP flex h-10 w-24 items-center justify-center 
                             rounded-full bg-cyan-500
                             px-3 py-2 text-sm text-white hover:shadow-md 
                             hover:shadow-cyan-500/50 xl:h-14 xl:w-36 xl:text-[1.25rem]'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
