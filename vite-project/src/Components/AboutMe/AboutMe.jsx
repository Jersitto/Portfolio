import React from 'react';


const AboutMe = () => {
    return (
        
        <div id='about' class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
              <div class="max-h-96 md:h-screen">
                <img class="w-auto h-screen object-contain object-top" src="https://i.ibb.co/GCGsm1s/img-profile.jpg" alt=""/>
              </div>
              <div class="flex bg-slate-600 p-10">
                <div class="mb-auto mt-auto max-w-lg">
                  <h1 class="text-gray-200 text-3xl font-bold ">!Hola, soy Jerson¡</h1>
                  <p className='text-gray-200 font-bold'>Soy un apasionado desarrollador Full Stack de 22 años con experiencia en Química Industrial, lo que me brinda una perspectiva única en la resolución de problemas. Especializado en backend y frontend, tengo habilidades en tecnologías como HTML, CSS, JavaScript, React y Node.js, lo que me permite crear soluciones completas y robustas. Familiarizado con SCRUM y GIT, colaboro eficientemente en equipos multidisciplinarios, priorizando una comunicación clara para satisfacer las necesidades de clientes y usuarios. Mis softskills incluyen empatía, liderazgo y una excelente capacidad de comunicación. Con un nivel C1 en inglés, puedo colaborar en entornos internacionales. Mi pasión por el aprendizaje me impulsa a ofrecer soluciones innovadoras y de alta calidad en todos mis proyectos.</p>
                </div>
              </div>
            </div>
          </div>

    );
};

export default AboutMe;
