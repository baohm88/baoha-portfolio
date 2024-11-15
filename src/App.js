import React from "react";
// components
import Hero from "./components/Hero";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
    return (
        <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
            <Header />
            <Hero />
            <Nav />
            <About />
            <Work />
            <Contact />
        </div>
    );
};

export default App;
