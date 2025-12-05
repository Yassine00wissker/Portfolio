import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ProjectModal from '../ProjectModal';

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      key: 'project1',
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tech: t('projects.project1.tech', { returnObjects: true }),
      link: '#',
      images: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      key: 'project2',
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tech: t('projects.project2.tech', { returnObjects: true }),
      link: '#',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      key: 'project3',
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tech: t('projects.project3.tech', { returnObjects: true }),
      link: '#',
      images: [
        'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ]
    }
  ];

  return (
    <section id='projects' className='min-h-screen flex items-center justify-center relative'>
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center'>
            {t('projects.title')}
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto text-sm md:text-base">
            {t('projects.subtitle')}
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projects.map((project) => (
              <div
                key={project.key}
                className='p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_18px_45px_rgba(30,64,175,0.45)] transition-all'
              >
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-400 mb-4'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 px-3 rounded-full py-1 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.2)] transition'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex justify-between items-center'>
                  <a
                    href={project.link}
                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                  >
                    {t('projects.project1.viewButton')}
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className='text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors'
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
