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
                        <Link to="contact">Let's talk</Link>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
