import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        sendEmail(e);
        e.target.reset();
        setShowModal(true);
    };

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                "service_kklhopr",
                "template_0fz8jue",
                e.target,
                "zPEPgrBLIIFKUxWHI"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                },
                (error) => {
                    console.log("Error sending email:", error.text);
                }
            );
    };

    return (
        <section id="contact" className="pt-8 pb-44 lg:section">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    {/* Text */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className="flex-1 flex justify-start items-center"
                    >
                        <div>
                            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                                Get in touch
                            </h4>
                            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                                Let's work <br />
                                together
                            </h2>
                        </div>
                    </motion.div>
                    {/* Form */}
                    <motion.form
                        id="myForm"
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
                        onSubmit={handleFormSubmit}
                    >
                        <input type="hidden" name="from_name" value="Bao Ha" />
                        <input
                            type="text"
                            name="to_name"
                            placeholder="Your name"
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                        />
                        <input
                            type="email"
                            name="reply_to"
                            placeholder="Your email"
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                        ></textarea>
                        <button className="btn btn-lg" type="submit">
                            Send message
                        </button>
                    </motion.form>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center">
                        <div className="bg-white/5 p-8 rounded-lg text-center">
                            <p className="py-8 text-accent">
                                Your message has been received. You will get an
                                email notification soon.
                            </p>
                            <button
                                className="btn btn-lg"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
