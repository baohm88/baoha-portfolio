import Clarins from "../assets/Clarins_Cosmetics.png";
import PhpBookstore from "../assets/php_bookstore.png";

const projectsData = [
    {
        title: "Clarins Cosmetics",
        description:
            "An ecommerce site where users can view and shop skincare and makeup products of various skin types.",
        technologies: ["React", "PHP MVC", "MySQL"],
        liveLink: "https://liveproject1.com",
        githubLink: "https://github.com/baohm88/team2fly-eproject",
        screenshot: Clarins,
        demoVideo: "https://youtu.be/rrxXPAbsfaw", // Optional
    },
    {
        title: "PHP Bookstore",
        description:
            "A brief description of Project 2, explaining its purpose and functionality.",
        technologies: ["PHP MVC", "MySQL", "HTML", "CSS", "JavaScript"],
        liveLink: "https://liveproject2.com",
        githubLink: "https://github.com/baohm88/php_bookstore",
        screenshot: PhpBookstore,
        demoVideo: "https://www.youtube.com/watch?v=example2", // Optional
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container mx-auto">
                <h2 className="h2 text-accent">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="project-card border rounded-lg p-6 shadow-lg"
                        >
                            <img
                                src={project.screenshot}
                                alt={`${project.title} screenshot`}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="h3 mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <p className="font-primary text-sm mb-2">
                                <strong>Technologies:</strong>{" "}
                                {project.technologies.join(", ")}
                            </p>
                            <div className="flex justify-between">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gradient font-medium"
                                >
                                    View Live
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gradient font-medium"
                                >
                                    View Code
                                </a>
                            </div>
                            {project.demoVideo && (
                                <div className="mt-4">
                                    <a
                                        href={project.demoVideo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gradient font-medium"
                                    >
                                        Watch Demo
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
