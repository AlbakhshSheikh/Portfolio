import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-transparent text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-8"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-xl mt-20"
                >
                    I am a passionate Software Engineer Trainee with a strong foundation in Computer Science.
                    I have solved 100+ problems on LeetCode, GeeksforGeeks, and HackerRank, demonstrating my problem-solving skills.
                    During my internship, I mentored 40+ students in web development technologies.
                </motion.p>

                <br />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-xl"
                >
                    I specialize in building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).
                    My experience includes developing full-scale applications like School Management Systems and ERP solutions,
                    optimizing performance, and implementing robust security features.
                </motion.p>
            </div>
        </div>
    );
};

export default About;
