import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    const projectsData = [
        {
            title: 'HenryCollege',
            description: 'Una página web diseñada y orientada a prestar un servicio de aprendizaje por medio de suscripción mensual. Esta web está pensada para aquellas personas que terminan un bootcamp y quieren empezar a reforzar sus conocimientos, tanto en las tecnologías que ya conoce y otras totalmente nuevas.',
            images: [
                'https://i.ibb.co/z4qJPtR/Captura-de-pantalla-2023-07-28-132108.png', 'https://i.ibb.co/JdS8p07/Captura-de-pantalla-2023-07-28-132133.png', 'https://i.ibb.co/jWLCJBW/Captura-de-pantalla-2023-07-28-132151.png'
            ],
            link: 'https://main--chic-queijadas-00551c.netlify.app/'
        }, {
            title: 'FarmaStack',
            description: 'Una página web diseñada como una solución virtual al acceso fácil y rapido a medicinas y articulos de aseo personal. Está pensada como un modelo de negocios de E-commerce con una integración a Paypal, con un registro de perfil con Auth0.',
            images: [
                'https://i.ibb.co/3k5jR3w/zyro-image.png', 'https://i.ibb.co/bN2wbwM/Captura-de-pantalla-2023-05-23-162058.png'
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
