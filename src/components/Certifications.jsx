import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const Certifications = () => {
    const achievements = [
        {
            id: 1,
            title: 'Problem Solving',
            details: 'Solved 100+ problems on LeetCode, GeeksforGeeks, HackerRank.',
        },
        {
            id: 2,
            title: 'Mentorship',
            details: 'Mentored 40+ students in HTML, CSS, and JavaScript during a software engineering internship, designing interactive workshops and improving student proficiency in web development.',
        },
    ];

    return (
        <div
            name="certifications"
            className="w-full h-screen bg-transparent text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-8"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Achievements
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map(({ id, title, details }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: id * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-6 rounded-lg shadow-lg hover:shadow-accent duration-300 flex flex-col items-center text-center"
                        >
                            <FaTrophy size={50} className="text-accent mb-4" />
                            <h3 className="text-xl font-bold mb-2">{title}</h3>
                            <p className="text-gray-300">{details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
