import { useEffect } from "react";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../../api/fetch";
// import LoginComponent from "../single-utility/LoginComponent";

const LoginPage = () => {
    const [userToken, setUserToken] = useState({
        token: null,
        userId: null,
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (userToken.token !== null) {
            navigate("/choose-sub", { state: userToken });
        }
    }, [userToken]);
    const setAutoLogout = (milliseconds) => {
        setTimeout(() => {
            logoutHandler();
        }, milliseconds);
    };

    const logoutHandler = () => {
        setUserToken({ token: null });
        localStorage.removeItem("token");
        localStorage.removeItem("expiryDate");
        localStorage.removeItem("userId");
    };

    const loginHandler = (authData) => {
        postData(
            "/auth/login",
            "POST",
            { "Content-Type": "application/json" },
            { email: authData.email, password: authData.password }
        )
            .then((res) => {
                if (res.status === 422) {
                    throw new Error("Validation failed.");
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log("Error!");
                    throw new Error("Could not authenticate you!");
                }
                return res.json();
            })
            .then((resData) => {
                localStorage.setItem("token", resData.token);
                localStorage.setItem("userId", resData.userId);
                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem("expiryDate", expiryDate.toISOString());
                setAutoLogout(remainingMilliseconds);
                setUserToken({
                    token: resData.token,
                    userId: resData.token,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData); //form object

        const inputRegex = {
            email: /^[\w\d.]+@[\w\d]+[\.\w\d]+$/g,
            password: /^[#\w@_-]{8,20}$/g,
        };

        if (
            inputRegex.email.test(userData.email) &&
            inputRegex.password.test(userData.password)
        ) {
            loginHandler(userData);
        } else {
            alert("Password or email format is incorrect");
        }
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
                        to='/login'
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
                            required='required'
                            className='w-[20vw] rounded-full px-3 py-2 shadow-xl 
                                       focus:outline-none'
                        />

                        <input
                            type='password'
                            placeholder='********'
                            name='password'
                            required='required'
                            className='rounded-full px-3 py-2 shadow-xl
                                       focus:outline-none'
                        />
                        <button
                            type='submit'
                            className='w-[6vw] place-self-center rounded-full bg-[#0099BD] 
                                     py-2 text-white shadow-xl hover:bg-[#0099BD]/80'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
