import { React, useState } from "react";
import { Link } from "react-router-dom";
// import LoginComponent from "../single-utility/LoginComponent";

const LoginPage = () => {
    const [userInputData, setUserInputData] = useState({
        email: "",
        password: "",
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData); //form object

        const inputRegex = {
            email: /^[\w\d.]+@[\w\d]+[\.\w\d]+$/g,
            password: /^[#\w@_-]{8,20}$/g,
        };

        // setUserInputData({ ...userInputData, [name]: value });
    };

    return (
        <div className='CONTENT flex h-[70vh] items-center justify-center'>
            <div
                className='CARD flex h-3/4 w-3/5 rounded-xl bg-[#D9D9D9] 
                           shadow-2xl shadow-gray-700'
            >
                <div
                    className='LEFTSIDE flex h-full w-1/2 flex-col
                               items-center justify-center rounded-l-xl 
                               bg-[#252931] text-white'
                >
                    <h2 className='text-2xl font-semibold'>New here?</h2>
                    <p className='mb-[10px] text-sm'>
                        Create new account in few seconds
                    </p>
                    <Link
                        to='/signin'
                        exact='true'
                        className='SIGN-IN rounded-full border-2 
                                 border-cyan-500 px-3 py-2
                                 hover:bg-cyan-500 hover:shadow-md hover:shadow-cyan-500/50'
                    >
                        Sign Up
                    </Link>
                </div>
                <div
                    className='RIGHTSIDE flex h-full w-1/2 flex-col
                               items-center justify-center'
                >
                    <h1 className='mb-5 text-4xl font-semibold'>Sign in</h1>

                    <form
                        className='flex flex-col gap-y-5'
                        onSubmit={onFormSubmit}
                    >
                        <input
                            type='text'
                            placeholder='john.smith_092@gmail.com'
                            name='email'
                            className='w-[20vw] rounded-full px-3 py-2 shadow-xl 
                                       focus:outline-none'
                        />
                        <input
                            type='password'
                            placeholder='********'
                            name='password'
                            className='rounded-full px-3 py-2 shadow-xl
                                       focus:outline-none'
                        />
                        <input
                            type='submit'
                            value='Login'
                            className='w-[6vw] place-self-center rounded-full bg-[#0099BD] py-2 
                                     text-white shadow-xl hover:bg-[#0099BD]/80'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
