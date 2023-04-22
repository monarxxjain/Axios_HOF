import React from "react";
import './App.css'
import AlumniApp from "./AlumniApp";
import Background from "./components/HomePage/Backround3JS/Background";
import { Hero } from "./components/HomePage/HeroSection/Hero";
import { CardList } from "./components/HomePage/Card/CardList";
import Footer from "./components/HomePage/Footer/Footer";
import NavbarHome from "./components/HomePage/HomeNavbar/NavbarHome";

const App = () => {
    return (
        <>
            <NavbarHome />
            {/* <AlumniApp/> */}
            <Background />
            <Hero />
            <CardList />
            <Footer />
        </>
    );
};

export default App;