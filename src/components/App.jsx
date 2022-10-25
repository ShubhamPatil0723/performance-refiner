import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// //components
import NavBar from "./single-utility/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Contact from "./Pages/Contact";
import Result from "./Pages/Result";
import Footer from "./single-utility/Footer";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' exact='true' element={<HomePage />} />
                    <Route path='/login' exact='true' element={<LoginPage />} />
                    <Route
                        path='/contact-us'
                        exact='true'
                        element={<Contact />}
                    />
                    <Route path='/result' exact='true' element={<Result />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
