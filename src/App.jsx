import React from "react";
import './App.css'
import AlumniApp from "./AlumniApp";
import Background from "./components/HomePage/Backround3JS/Background";
import { Hero } from "./components/HomePage/HeroSection/Hero";
import { CardList } from "./components/HomePage/Card/CardList";
import Footer from "./components/HomePage/Footer/Footer";
import NavbarHome from "./components/HomePage/HomeNavbar/NavbarHome";
import TechEvents from "./components/TechEventsPage/TechEvents";
import { Navbar } from "./components/AlumniPage";
import LoginForm from "./components/LoginPage/LoginForm";
import FullScreenDialog from "./components/FullScreenDialog/FullScreenDialog";

const App = () => {
    return (
        <>
            {/* <Navbar/> */}
            {/* <TechEvents/>    */}
            <NavbarHome />
            <Background />
            <Hero />
            <CardList />
            <Footer />
            {/* <AlumniApp/> */}
            {/* <LoginForm/> */}
            {/* <FullScreenDialog/> */}
        </>
    );
};

export default App;