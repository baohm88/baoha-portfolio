import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";
import Img1 from "../assets/Clarins_Cosmetics.png";
import Img2 from "../assets/php_bookstore.png";
import Img3 from "../assets/react-tictactoe.png";
import Img4 from "../assets/react-investment-calculator.png";

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
                    >
                        {/* text */}
                        <div>
                            <h2 className="h2 leading-tight text-accent">
                                Selected Work.
                            </h2>
                        </div>
                        {/* image */}
                        {/* project 1 */}
                        <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
                            {/* overlay */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* img */}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img1}
                                alt="Clarins Cosmetics"
                            />
                            {/* links */}
                            <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50 flex gap-8">
                                <a
                                    href="https://youtu.be/rrxXPAbsfaw"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gradient flex items-center gap-2 hover:text-accent"
                                >
                                    Demo <FaYoutube />
                                </a>
                                <a
                                    href="https://github.com/baohm88/team2fly-eproject"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gradient flex items-center gap-2 hover:text-accent"
                                >
                                    Code <FaGithub />
                                </a>
                            </div>

                            {/* title */}
                            <div className="absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">
                                    Clarins Cosmetics
                                </span>
                            </div>
                        </div>

                        {/* project 2 */}
                        <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
                            {/* overlay */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* img */}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img4}
                                alt="React Investment Calculator"
                            />
                            {/* links */}
                            <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50 flex gap-8">
                                <a
                                    href="https://baohm88.github.io/React-Investment-Calculator/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gradient flex items-center gap-2 hover:text-accent"
                                >
                                    Live <FaExternalLinkAlt />
                                </a>
                                <a
                                    href="https://github.com/baohm88/React-Investment-Calculator"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gradient flex items-center gap-2 hover:text-accent"
                                >
                                    Code <FaGithub />
                                </a>
                            </div>

                            {/* title */}
                            <div className="absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">
                                    Investment Calcuator
                                </span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-10"
                    >
                        {/* project 3 */}
                        <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
                            {/* overlay */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* img */}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img2}
                                alt="Programming Books Store"
                            />
                            {/* links */}
                            <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50 flex gap-8">
                                <a
                                    href="http://programmingbooks-store.free.nf/books"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gradient flex items-center gap-2 hover:text-accent"
                                >
                                    Live <FaExternalLinkAlt />
                                </a>
                                
                                <a
                                    href="https://github.com/baohm88/php_bookstore"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gradient flex items-center gap-2 hover:text-accent"
                                >
                                    Code <FaGithub />
                                </a>
                            </div>

                            {/* title */}
                            <div className="absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">
                                    Programming Books Store
                                </span>
                            </div>
                        </div>

                        {/* project 4 */}
                        <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
                            {/* overlay */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* img */}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img3}
                                alt="Another Project"
                            />
                            {/* links */}
                            <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50 flex gap-8">
                                <a
                                    href="https://baohm88.github.io/react-tictactoe/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gradient flex items-center gap-2 hover:text-accent"
                                >
                                    Live <FaExternalLinkAlt />
                                </a>
                                
                                <a
                                    href="https://github.com/baohm88/react-tictactoe.git"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gradient flex items-center gap-2 hover:text-accent"
                                >
                                    Code <FaGithub />
                                </a>
                            </div>

                            {/* title */}
                            <div className="absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">
                                    Tic-Tac-Toe Game
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
