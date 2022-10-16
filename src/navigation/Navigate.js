import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from '../pages/home/Home' 


export default function Navigate() {
    return (
        <Router>
        <div>
        <div><Header/></div>
        <Routes>

                    <Route exact path="/" element={<Home />}></Route> 

                    
 

                </Routes>
                <div><Footer/></div>
            </div>
        </Router>

    );
}