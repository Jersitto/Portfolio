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
                    I am a passionate Full Stack developer with experience in Industrial Chemistry, which provides me with a unique perspective in problem-solving. Specializing in both backend and frontend, I have skills in technologies such as HTML, CSS, JavaScript, React, and Node.js, enabling me to create comprehensive and robust solutions. Familiar with SCRUM and GIT, I collaborate efficiently in multidisciplinary teams, prioritizing clear communication to meet the needs of clients and users. My soft skills include empathy, leadership, and excellent communication abilities. With a C1 level in English, I can collaborate in international environments. My passion for learning drives me to deliver innovative and high-quality solutions in all my projects.
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
