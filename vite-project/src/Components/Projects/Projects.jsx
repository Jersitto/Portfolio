import React from 'react';

const Projects = () => {
  // Aquí puedes reemplazar los datos de ejemplo con tus propios proyectos
  const projectsData = [
    {
      title: 'Proyecto 1',
      description: 'Breve descripción del proyecto 1.',
    },
    {
      title: 'Proyecto 2',
      description: 'Breve descripción del proyecto 2.',
    },
    // Agrega más proyectos aquí si es necesario
  ];

  return (
    <section id='projects' className="p-4">
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;