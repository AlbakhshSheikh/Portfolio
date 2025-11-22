import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-transparent"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center h-full"
                >
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm <span className="text-gradient">Albakhsh Sheikh</span>
                    </h2>
                    <h3 className="text-2xl sm:text-4xl font-bold text-gray-300 mt-2">
                        Software Engineer Trainee
                    </h3>
                    <p className="text-gray-400 py-4 max-w-md text-lg">
                        I have a passion for building and designing software.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next JS and GraphQL.
                    </p>

                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-cyan-500/50"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
