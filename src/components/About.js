import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    {/* img */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top bg-border-8"
                    ></motion.div>
                    {/* txt */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <h2 className="h2 text-accent">About me.</h2>
                        <h3 className="h3 mb-4">
                            I'm a Full Stack Developer with 1+ years of
                            experience.
                        </h3>
                        <p className="mb-6">
                            I'm Bao Ha, a dedicated full-stack developer with
                            expertise in PHP, Python, Express.js, and Next.js
                            for backend development. On the frontend, I create
                            dynamic user experiences using HTML, CSS,
                            JavaScript, and React, while leveraging frameworks
                            like Bootstrap and Tailwind to craft responsive
                            designs. My passion for coding drives me to build
                            efficient and scalable applications. I thrive in
                            collaborative environments and am eager to
                            contribute innovative solutions that make a
                            difference. Let’s connect and create something
                            amazing together!
                        </p>
                        {/* stats */}
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={1}
                                            duration={3}
                                        />
                                    ) : null}
                                    +
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Years of <br /> Experience
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={15}
                                            duration={3}
                                        />
                                    ) : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Personal <br /> Projects
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={10}
                                            duration={3}
                                        />
                                    ) : null}
                                    +
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Technologies <br /> Used
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">
                                <Link to="contact">Contact Me</Link>
                            </button>
                            <Link to="work" className="text-gradient btn-link">
                                My Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
