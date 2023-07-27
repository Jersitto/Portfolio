import React from 'react';


const AboutMe = () => {
    return (
        <div id="about" class="relative bg-slate-800 overflow-hidden mt-16">
    <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-slate-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-slate-800 transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div class="pt-1"></div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                    <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-200 sm:text-3xl md:text-4xl">
                        About me
                    </h2>

                    <p className='text-gray-200 font-bold'>
                    Soy un apasionado desarrollador Full Stack con experiencia en Química Industrial, lo que me brinda una perspectiva única en la resolución de problemas. Especializado en backend y frontend, tengo habilidades en tecnologías como HTML, CSS, JavaScript, React y Node.js, lo que me permite crear soluciones completas y robustas. Familiarizado con SCRUM y GIT, colaboro eficientemente en equipos multidisciplinarios, priorizando una comunicación clara para satisfacer las necesidades de clientes y usuarios. Mis softskills incluyen empatía, liderazgo y una excelente capacidad de comunicación. Con un nivel C1 en inglés, puedo colaborar en entornos internacionales. Mi pasión por el aprendizaje me impulsa a ofrecer soluciones innovadoras y de alta calidad en todos mis proyectos.
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-screen w-screen object-cover object sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.ibb.co/GCGsm1s/img-profile.jpg" alt="PHOTO"/>
    </div>
</div>
    );
};

export default AboutMe;
