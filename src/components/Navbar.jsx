import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'resume' },
        { id: 2, link: 'home' },
        { id: 3, link: 'about' },
        { id: 4, link: 'skills' },
        { id: 5, link: 'qualifications' },
        { id: 6, link: 'projects' },
        { id: 7, link: 'certifications' },
        { id: 8, link: 'contact' },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed z-50 glass">
            <div>
                <h1 className="text-3xl md:text-5xl font-signature ml-2 cursor-pointer hover:text-accent transition-colors duration-300">Albakhsh Sheikh</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-accent duration-200"
                    >
                        {link === 'resume' ? (
                            <a
                                href="https://drive.google.com/file/d/1luua2JTjorQVCZcvAEvF_54a2M67nDTB/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {link}
                            </a>
                        ) : (
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden hover:text-accent transition-colors duration-300"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary to-secondary text-gray-300 z-40">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-accent transition-colors duration-300"
                        >
                            {link === 'resume' ? (
                                <a
                                    onClick={() => setNav(!nav)}
                                    href="https://drive.google.com/file/d/1luua2JTjorQVCZcvAEvF_54a2M67nDTB/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link}
                                </a>
                            ) : (
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth
                                    duration={500}
                                >
                                    {link}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
