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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
const App = () => {
    return (
        <>
                {/* <Navbar/> */}
                {/* <TechEvents/>    */}
            
                {/* <NavbarHome />
                <Background />
                <Hero />
                <CardList />
                <Footer /> */}


      
       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
            <NavbarHome />
                <Background />
                <Hero />
                <CardList />
                <Footer />
        </>}/>
        <Route path="/alumni_app" element={<><NavbarHome/><AlumniApp/></>}> </Route>
        <Route path="/tech_events" element={<><NavbarHome/><TechEvents/></>}> </Route>
        <Route path="/contact_us" element={<><NavbarHome/><ContactUs/></>}> </Route>
        <Route path="/login_signup" element={<><NavbarHome/><Background /><LoginForm/></>}> </Route>
      </Routes>
    </BrowserRouter>
            
            {/* <AlumniApp/> */}
            {/* <LoginForm/> */}
            {/* <FullScreenDialog/> */}
        </>
    );
};

export default App;