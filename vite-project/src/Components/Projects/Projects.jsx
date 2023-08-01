import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    const projectsData = [
        {
            title: 'HenryCollege',
            description: 'It is a website designed to offer a learning service through a monthly subscription. It is specifically targeted towards individuals who have completed a bootcamp and want to reinforce their knowledge in the technologies they already know, as well as delve into entirely new ones.',
            images: [
                'https://i.ibb.co/z4qJPtR/Captura-de-pantalla-2023-07-28-132108.png', 'https://i.ibb.co/JdS8p07/Captura-de-pantalla-2023-07-28-132133.png', 'https://i.ibb.co/jWLCJBW/Captura-de-pantalla-2023-07-28-132151.png'
            ],
            link: 'https://main--chic-queijadas-00551c.netlify.app/'
        }, {
            title: 'FarmaStack',
            description: 'The website is crafted as a virtual solution for easy and quick access to medicines and personal care products. It is conceived as an E-commerce business model with seamless integration to PayPal, and it features a user profile registration with Auth0.',
            images: [
                'https://i.ibb.co/bN2wbwM/Captura-de-pantalla-2023-05-23-162058.png', 'https://i.ibb.co/h7wsZHt/Captura-de-pantalla-2023-05-23-162206.png' , 'https://i.ibb.co/bvqdJXH/Captura-de-pantalla-2023-05-23-162233.png', 'https://i.ibb.co/S5ZXLPt/Captura-de-pantalla-2023-05-23-162421.png'
            ],
            link: 'https://front-farma-stack.vercel.app/'
        },
        // Agrega más proyectos aquí si es necesario
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id='projects' className="p-4">
            <h2 className="text-2xl text-center text-gray-200 font-extrabold sm:text-3xl md:text-4xl  my-20 mb-5">Projects</h2>
            <div className="grid grid-cols-2 gap-4">
                {
                projectsData.map((project, index) => (
                    <div key={index}
                        className="bg-slate-800 p-4 rounded-lg shadow-md">
                        <Slider {...sliderSettings}>
                            {
                            project.images.map((image, imageIndex) => (
                                <div key={imageIndex}>
                                    <img src={image}
                                        alt={
                                            `${
                                                project.title
                                            } - Image ${
                                                imageIndex + 1
                                            }`
                                        }
                                        className="w-screen h-screen object-scale-down mb-4 rounded-lg"/>
                                </div>
                            ))
                        } </Slider>
                        <h3 className="text-xl text-gray-100 font-bold mb-2">
                            {
                            project.title
                        }</h3>
                        <p className="text-gray-400 mb-4">
                            {
                            project.description
                        }</p>
                        <a href={
                                project.link
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600">
                            Ver más
                        </a>
                    </div>
                ))
            } </div>
        </section>
    );
};

export default Projects;
