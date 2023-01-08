import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import AuthProvider from "./context/AuthProvider";

// components
import NavBar from "./single-utility/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Contact from "./Pages/Contact";
import Result from "./Pages/Result";
import Footer from "./single-utility/Footer";
import ChooseSub from "./Pages/ChooseSub";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* public */}
                    <Route path='/' exact='true' element={<HomePage />} />
                    <Route path='/login' exact='true' element={<LoginPage />} />
                    <Route
                        path='/contact-us'
                        exact='true'
                        element={<Contact />}
                    />
                    {/* protected */}
                    <Route path='/result' exact='true' element={<Result />} />
                    <Route
                        path='/choose-sub'
                        exact='true'
                        element={<ChooseSub />}
                    />

                    {/* Missing */}
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
