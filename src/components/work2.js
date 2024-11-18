import { FaExternalLinkAlt, FaCode, FaPlay } from "react-icons/fa";
import ProjectImg1 from "../assets/Clarins_Cosmetics.png";
import ProjectImg2 from "../assets/php_bookstore.png";
import ProjectImg3 from "../assets/portfolio-img3.png";

const projectsData = [
    {
        title: "Clarins Cosmetics",
        description:
            "A modern e-commerce website for cosmetics with responsive design.",
        image: ProjectImg1,
        liveLink: "https://live-link1.com",
        demoLink: "https://demo-link1.com",
        codeLink: "https://github.com/code-link1",
    },
    {
        title: "Programming Books Store",
        description:
            "An online bookstore built with PHP for managing programming books.",
        image: ProjectImg2,
        liveLink: "https://live-link2.com",
        demoLink: "https://demo-link2.com",
        codeLink: "https://github.com/code-link2",
    },
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio website built with React and Tailwind CSS.",
        image: ProjectImg3,
        liveLink: "https://live-link3.com",
        demoLink: "https://demo-link3.com",
        codeLink: "https://github.com/code-link3",
    },
];

const Work = () => {
    return (
        // <section id="projects" className="section bg-gray-900 text-white">
        <section id="work" className="section">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-left mb-10 text-accent">
                    Projects
                </h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <h3 className="text-lg font-bold text-white">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gradient flex items-center gap-2 hover:text-accent"
                                    >
                                        <FaExternalLinkAlt />
                                        Live
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gradient flex items-center gap-2 hover:text-accent"
                                    >
                                        <FaPlay />
                                        Demo
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gradient flex items-center gap-2 hover:text-accent"
                                    >
                                        <FaCode />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
