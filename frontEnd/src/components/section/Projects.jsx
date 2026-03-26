import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import { useTranslation } from 'react-i18next'
import ProjectModal from '../ProjectModal'

// Replace '#' with real URLs when you have them
const projectMeta = {
  project1: {
    category: 'Full-Stack',
    link: '#',
    github: 'https://github.com/Yahyaoui-Yassin',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    ],
  },
  project2: {
    category: 'AI / Web',
    link: '#',
    github: 'https://github.com/Yahyaoui-Yassin',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    ],
  },
  project3: {
    category: 'Full-Stack',
    link: '#',
    github: 'https://github.com/Yahyaoui-Yassin',
    images: [
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1000&q=80',
    ],
  },
}

// GitHub SVG icon
const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

function Projects() {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const projectKeys = ['project1', 'project2', 'project3']

  const projects = projectKeys.map((key) => ({
    key,
    title: t(`projects.${key}.title`),
    description: t(`projects.${key}.description`),
    tech: t(`projects.${key}.tech`, { returnObjects: true }),
    ...projectMeta[key],
  }))

  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative py-10">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center">
            {t('projects.title')}
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full" />
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            {t('projects.subtitle')}
          </p>

          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                  ${activeFilter === cat
                    ? 'bg-blue-500 border-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                    : 'border-white/10 text-gray-400 hover:border-blue-500/40 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.key}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_18px_45px_rgba(30,64,175,0.3)] transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className="h-36 overflow-hidden border-b border-white/5">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  {/* Category badge */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-1">
                    {project.category}
                  </span>

                  <h3 className="text-base font-bold mb-2 text-white leading-snug">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-xs transition-colors flex items-center gap-1"
                    >
                      Live Demo
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Details
                    </button>
                  </div>
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
  )
}

export default Projects