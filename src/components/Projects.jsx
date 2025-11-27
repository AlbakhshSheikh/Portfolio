import React from 'react';
import { motion } from 'framer-motion';
import img1 from './school.jpg'
import img2 from './erp.jpg'
import img3 from './hotel.jpg'
const Projects = () => {
    const projects = [
        {
            id: 1,
            src: img1, // use the imported local image
            title: 'School Management System',
            tech: 'React.js, JavaScript, GitLab CI/CD, REST API',
            desc: 'Scalable web app with 20+ modules for Fee, Timetable, Attendance. Optimized load time by 30%.',
            demo: 'https://stpl.cloud/login',
            code: '#',
        },

        {
            id: 2,
            src: img2,
            title: 'ERP System for Manufacturing',
            tech: 'React.js, REST API, Axios, Formik, Yup',
            desc: 'ERP system with 30+ modules for HR, Inventory. Role-based access control for multiple companies.',
            demo: 'https://industrynext.in/login',
            code: '#',
        },
        {
            id: 3,
            src: img1,
            title: 'Bansal Academy Management',
            tech: 'React.js, JavaScript, GitLab CI/CD, REST API',
            desc: 'Web app with 10+ modules for Admission, Test Schedule. Responsive dashboard with interconnected menus.',
            demo: 'https://stpl.cloud/login',
            code: '#',
        },
        {
            id: 4,
            src: img3,
            title: 'Hotel Management System',
            tech: 'React.js, REST API, Axios, Formik, Yup',
            desc: 'Hotel booking and management system with room inventory, reservations, and billing.',
            demo: 'https://foodnext.in/login',
            code: '#',
        },
    ];

    return (
        <div
            name="projects"
            className="bg-transparent w-full text-white py-20"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-8"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, src, title, tech, desc, demo, code }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: id * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 glass flex flex-col h-full"
                        >
                            <img
                                src={src}
                                alt=""
                                className="rounded-t-md duration-200 hover:scale-105 w-full h-48 object-cover"
                            />
                            <div className="flex flex-col p-4 flex-grow">
                                <h3 className="text-xl font-bold mb-2">{title}</h3>
                                <p className="text-sm text-accent mb-2">{tech}</p>
                                <p className="text-gray-300 text-sm mb-4 flex-grow">{desc}</p>
                                <div className="flex items-center justify-center w-full mt-auto">
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href={code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 border border-gray-500 rounded-md hover:bg-gray-800 text-center"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
