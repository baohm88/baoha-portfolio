const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="home" className="logo">
                        <svg
                            // width="111"
                            height="48"
                            viewBox="0 0 333 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient
                                    id="textGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    {/* <stop offset="0%" stop-color="#FF5733" />
                                    <stop offset="50%" stop-color="#FFC300" />
                                    <stop offset="100%" stop-color="#DAF7A6" /> */}
                                    <stop offset="0" stop-color="#f0f"></stop>
                                    <stop offset="1" stop-color="#0ff"></stop>
                                </linearGradient>
                            </defs>

                            <text
                                x="10"
                                y="30"
                                font-family="Aldrich"
                                font-size="48"
                                fill="url(#textGradient)"
                            >
                                bao-ha.
                            </text>
                        </svg>
                    </a>
                    <button className="btn btn-sm">
                        <a
                            href="https://drive.google.com/file/d/1XgSBoGxt80u5q-f3NH6KmOmKNGxBsidZ/view?usp=sharing"
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
