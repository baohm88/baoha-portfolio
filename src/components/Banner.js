import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
    return (
        <section
            className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
            id="home"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    {/* text */}
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
                        >
                            BAO <span>HA</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
                        >
                            <span className="text-white mr-4">I am a</span>
                            <TypeAnimation
                                sequence={[
                                    "Developer",
                                    2000,
                                    "Designer",
                                    2000,
                                    "YouTuber",
                                    2000,
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            Hello! I'm Bao Ha, an aspiring full-stack developer
                            with a solid foundation in Python, PHP, JavaScript,
                            and React, and a growing portfolio of personal
                            projects. While I'm new to professional web
                            development, I'm driven to create meaningful,
                            impactful applications and eager to bring fresh
                            ideas and dedication to a dynamic development team.
                            Let’s build something great together!
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-12 max-auto lg:mx-0"
                        >
                            <button className="btn btn-lg">
                                <Link to="contact">Contact Me</Link>
                            </button>
                            <Link to="work" className="text-gradient btn-link">
                                My Portfolio
                            </Link>
                        </motion.div>
                        {/* socials */}
                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
                        >
                            <a
                                href="https://www.youtube.com/@baoha5310"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://github.com/baohm88"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://dribbble.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDribbble />
                            </a>
                        </motion.div>
                    </div>
                    {/* image */}
                    <motion.div
                        variants={fadeIn("down", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
                    >
                        <img src={Image} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
