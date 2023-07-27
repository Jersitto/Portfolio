import React from 'react';


const Header = () => {
    return (
        <header className="bg-slate-800 p-4">
            <div className="flex flex-col items-center">
                <h1 className="text-white text-3xl font-extrabold text-center">Jerson Gonzalez Estrada</h1>
                <p className='text-white text-3x1 font-bold'>Fullstack Developer</p>
                <div className="flex space-x-4">
                    <a href="#about" className="text-white font-bold hover:underline">
                        About
                    </a>
                    <a href="#projects" className="text-white font-bold hover:underline">
                        Projects
                    </a>
                    <a href="#contact" className="text-white font-bold hover:underline">
                        Contact
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
