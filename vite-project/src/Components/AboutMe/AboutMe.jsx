import React from 'react';


const AboutMe = () => {
    return (
        <div className='flex flex-col items-center'>
            <section id='about' className="flex flex-col items-center p-4">
                <h2 className="text-2xl font-bold mb-2">About Me</h2>
                <img src="" alt="#" className=''/>
                <p className="text-gray-300 text-center">
                    ¡Hola, soy jerson!
                    Un Fullstack Web Developer de Colombia, que viene de un Background de Química Industríal. Comencé a estudiar WEB a principios de 2022 y aprendí diversas tecnologías como: ReactJS, NodeJS, ExpressJS, PostgreSQL, JavaScript, HTML5. Soy más que todo muy especializado en BackEnd, ya que en mis anteriores estudios aprendí a manejar una gran cantidad de datos y en los proyectos que he realizado he trabjado en esta parte del entorno, pero sin dejar de lado el FrontEnd. <br />
                    Soy una persona totalmente apasionada por el código, también tengo varias Soft Skills como: Empatía, Resiliencia, Paciencia, Liderazgo. En definitiva sé trabajar en equipo y mantener un orden entre un equipo.
                    En la parte de comunicación soy una persona impecable con las palabras que usa y el vocabulario con el que se dirige a las demás personas, además tengo una certificación en inglés C1, que me permite comunicarme también en un ambiente internacional.
                </p>
            </section>
        </div>

    );
};

export default AboutMe;
