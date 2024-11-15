import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="home">
                        <img src={Logo} alt="" />
                    </a>
                    <button className="btn btn-sm">
                        <a
                            href="https://drive.google.com/file/d/13O0mWDLPA-kTBvFoC6fKZpeYyszqbmUF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
