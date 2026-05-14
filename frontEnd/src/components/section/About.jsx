import React from 'react';
import {
  FaNodeJs, FaDocker, FaGitAlt, FaJs, FaReact
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiTypescript, SiPostgresql,
  SiFastapi, SiPython, SiTailwindcss, SiGithub,
  SiExpress, SiHtml5, SiCss3,
} from 'react-icons/si';
import RevealOnScroll from '../RevealOnScroll';
import { useTranslation } from 'react-i18next';

const icons = [
  { icon: <SiMongodb size={34} color="#4DB33D" />, label: "MongoDB" },
  { icon: <SiMysql size={34} color="#4479A1" />, label: "MySQL" },
  { icon: <SiPostgresql size={34} color="#336791" />, label: "PostgreSQL" },
  { icon: <FaNodeJs size={34} color="#339933" />, label: "Node.js" },
  { icon: <FaReact size={34} color="#61DAFB" />, label: "React" },
  { icon: <FaDocker size={34} color="#0db7ed" />, label: "Docker" },
  { icon: <FaGitAlt size={34} color="#F05032" />, label: "Git" },
  { icon: <FaJs size={34} color="#F7DF1E" />, label: "JavaScript" },
  { icon: <SiTypescript size={34} color="#3178C6" />, label: "TypeScript" },
  { icon: <SiFastapi size={34} color="#009688" />, label: "FastAPI" },
  { icon: <SiPython size={34} color="#306998" />, label: "Python" },
  { icon: <SiTailwindcss size={34} color="#38B2AC" />, label: "Tailwind" },
  { icon: <SiGithub size={34} color="white" />, label: "GitHub" },
  { icon: <SiExpress size={34} color="white" />, label: "Express" },
  { icon: <SiHtml5 size={34} color="#E34F26" />, label: "HTML5" },
  { icon: <SiCss3 size={34} color="#1572B6" />, label: "CSS3" },
];

const frontendSkills = ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"];
const backendSkills  = ["Node.js", "Express", "FastAPI", "Python", "MongoDB", "MySQL", "PostgreSQL"];

function SkillPill({ label }) {
  return (
    <span className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-lg hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/5 transition-all duration-200 cursor-default">
      {label}
    </span>
  );
}

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-950 overflow-hidden">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 mb-20">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center">
            {t('about.aboutMe')}
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12 rounded-full" />

          {/* Bio + Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">

            {/* Bio and Focus Areas */}
            <div className="flex flex-col gap-6">
              <p className="text-gray-300 leading-relaxed text-sm md:text-base bg-blue-500/5 p-5 rounded-2xl border border-blue-500/10">
                {t('about.bioSummary')}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-blue-500/50 inline-block" />
                  {t('about.focusAreasTitle')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t('about.focusAreas', { returnObjects: true })?.map?.((focus, i) => (
                    <div key={i} className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.1)] transition-all duration-300 group">
                      <div className="text-2xl w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                        {focus.icon}
                      </div>
                      <div>
                        <h4 className="text-gray-200 text-sm font-bold mb-1.5 group-hover:text-blue-300 transition-colors">{focus.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{focus.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education + Work cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎓</span>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-widest">
                    {t('about.education')}
                  </h3>
                </div>
                <p className="text-gray-200 text-sm font-medium">{t('about.degree')}</p>
                <p className="text-gray-500 text-xs mt-1">{t('about.school')}</p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">💼</span>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-widest">
                    {t('about.workExperience')}
                  </h3>
                </div>
                <div className="space-y-6">
                  {t('about.experiences', { returnObjects: true })?.map?.((exp, index) => (
                    <div key={index} className="relative pl-4 border-l-2 border-blue-500/30">
                      <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-1.5 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      <h4 className="text-gray-200 text-sm font-bold">{exp.title}</h4>
                      <p className="text-blue-400 text-xs mt-0.5">{exp.company} • {exp.date}</p>
                      <ul className="mt-2 space-y-1.5">
                        {exp.tasks?.map?.((task, i) => (
                          <li key={i} className="text-gray-400 text-xs list-disc ml-3 leading-relaxed">{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-blue-500/50 inline-block" />
                {t('about.frontend')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((s) => <SkillPill key={s} label={s} />)}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-cyan-500/50 inline-block" />
                {t('about.backend')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((s) => <SkillPill key={s} label={s} />)}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-gray-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-gray-950 to-transparent" />
        <div className="overflow-hidden">
          <div className="marquee__inner flex w-max">
            {[...icons, ...icons].map(({ icon, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-2 mx-8 group cursor-default" title={label}>
                <div className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {icon}
                </div>
                <span className="text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee__inner { animation: marquee-scroll 22s linear infinite; }
        .marquee__inner:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}

export default About;