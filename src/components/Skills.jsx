import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs, FaJava, FaPython, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus } from 'react-icons/si';

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: <SiCplusplus size={80} className="text-blue-500" />,
            title: 'C/C++',
            style: 'shadow-blue-500',
        },
        {
            id: 2,
            src: <FaJava size={80} className="text-red-500" />,
            title: 'Java',
            style: 'shadow-red-500',
        },
        {
            id: 3,
            src: <FaPython size={80} className="text-yellow-400" />,
            title: 'Python',
            style: 'shadow-yellow-400',
        },
        {
            id: 4,
            src: <FaHtml5 size={80} className="text-orange-500" />,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 5,
            src: <FaCss3Alt size={80} className="text-blue-500" />,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 6,
            src: <FaJs size={80} className="text-yellow-500" />,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 7,
            src: <FaReact size={80} className="text-blue-600" />,
            title: 'React.js',
            style: 'shadow-blue-600',
        },
        {
            id: 8,
            src: <FaNodeJs size={80} className="text-green-500" />,
            title: 'Node.js',
            style: 'shadow-green-500',
        },
        {
            id: 9,
            src: <SiExpress size={80} className="text-gray-400" />,
            title: 'Express.js',
            style: 'shadow-gray-400',
        },
        {
            id: 10,
            src: <SiMongodb size={80} className="text-green-400" />,
            title: 'MongoDB',
            style: 'shadow-green-400',
        },
        {
            id: 11,
            src: <FaBootstrap size={80} className="text-purple-600" />,
            title: 'Bootstrap',
            style: 'shadow-purple-600',
        },
        {
            id: 12,
            src: <FaGitAlt size={80} className="text-orange-600" />,
            title: 'Git',
            style: 'shadow-orange-600',
        },
    ];

    return (
        <div
            name="skills"
            className="bg-transparent w-full h-full py-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </motion.div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: id * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg glass ${style}`}
                        >
                            <div className="w-20 mx-auto">{src}</div>
                            <p className="mt-4">{title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
