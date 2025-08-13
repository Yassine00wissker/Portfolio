import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  const project1Tech = t('projects.project1.tech', { returnObjects: true });

  return (
    <section id='projects' className='min-h-screen flex items-center justify-center relative'>
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            {t('projects.title')}
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all'>
              <h3 className='text-xl font-bold mb-2'>{t('projects.project1.title')}</h3>
              <p className='text-gray-400 mb-4'>{t('projects.project1.description')}</p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {project1Tech.map((tech, key) => (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 px-3 rounded-full py-1 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.2)] transition'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href='#'
                className='text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block'
              >
                {t('projects.project1.viewButton')}
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
