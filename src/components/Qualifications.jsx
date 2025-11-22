import React from 'react';
import { motion } from 'framer-motion';

const Qualifications = () => {
    const education = [
        {
            id: 1,
            title: 'B.Tech - Computer Science Engineering',
            institution: 'Rashtrasant Tukadoji Maharaj Nagpur University',
            year: '2020 - 2024',
            details: 'CGPA: 7.9/10.0',
        },
    ];

    const experience = [
        {
            id: 1,
            title: 'Software Engineer Trainee',
            company: 'StepOne Technologies',
            year: 'Feb 2025 – Present',
            details: [
                'Developed three full-scale web applications (School Management, Bansal Academy, ERP for Manufacturing) using React.js.',
                'Built scalable, responsive frontends with React hooks, Reactstrap, Formik, and Yup.',
                'Integrated RESTful APIs with Axios, reducing load times by 30%.',
                'Implemented role-based access control and user management.',
            ],
        },
    ];

    return (
        <div
            name="qualifications"
            className="w-full bg-transparent text-white py-20"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-8"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Qualifications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-accent">Education</h3>
                        {education.map(({ id, title, institution, year, details }) => (
                            <div key={id} className="mb-6 border-l-4 border-gray-500 pl-4 glass p-4 rounded-r-lg">
                                <h4 className="text-xl font-semibold">{title}</h4>
                                <p className="text-gray-300">{institution}</p>
                                <p className="text-gray-400 text-sm">{year}</p>
                                <p className="text-gray-400 text-sm mt-1">{details}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-accent">Experience</h3>
                        {experience.map(({ id, title, company, year, details }) => (
                            <div key={id} className="mb-6 border-l-4 border-gray-500 pl-4 glass p-4 rounded-r-lg">
                                <h4 className="text-xl font-semibold">{title}</h4>
                                <p className="text-gray-300">{company}</p>
                                <p className="text-gray-400 text-sm mb-2">{year}</p>
                                <ul className="list-disc list-inside text-gray-400 text-sm">
                                    {details.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Qualifications;
