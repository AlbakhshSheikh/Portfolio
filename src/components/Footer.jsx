import React from 'react';

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full text-center p-2 md:p-4 bg-primary/90 text-gray-400 border-t border-gray-700 glass z-40 backdrop-blur-md">
            <p className="text-xs md:text-sm">
                Made With <span className="text-red-500">❤️</span> by Albakhsh Sheikh
            </p>
        </div>
    );
};

export default Footer;
