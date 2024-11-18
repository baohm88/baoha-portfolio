import Hero from "./components/Hero";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

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
