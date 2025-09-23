import React from 'react';
import { 
  FaNodeJs, FaDocker, FaGitAlt, FaJs, FaFigma 
} from 'react-icons/fa';
import { 
  SiMongodb, SiMysql, SiTypescript, SiPostgresql, SiJenkins, 
  SiFastapi, SiPython, SiBootstrap, SiTailwindcss, SiGithub,
  SiExpress, SiHtml5, SiCss3, 
} from 'react-icons/si';

const icons = [
  <SiMongodb size={40} color="#4DB33D"/>,
  <SiMysql size={40} color="#4479A1"/>,
  <SiPostgresql size={40} color="#336791"/>,
  <FaNodeJs size={40} color="#339933"/>,
  <FaDocker size={40} color="#0db7ed"/>,
  <SiJenkins size={40} color="#D24939"/>,
  <FaGitAlt size={40} color="#F05032"/>,
  <FaJs size={40} color="#F7DF1E"/>,
  <SiTypescript size={40} color="#3178C6"/>,
  <SiFastapi size={40} color="#009688"/>,
  <SiPython size={40} color="#306998"/>,
  <SiBootstrap size={40} color="#7952B3"/>,
  <SiTailwindcss size={40} color="#38B2AC"/>,
  <SiGithub size={40} color="white"/>,
  <SiExpress size={40} color="white"/>,
  <SiHtml5 size={40} color="#E34F26"/>,
  <SiCss3 size={40} color="#1572B6"/>
];

function About() {
  return (
    <section className="py-10 bg-gray-950 overflow-hidden" id='about'>
      <div className="marquee">
        <div className="marquee__inner">
          {[...icons, ...icons].map((icon, i) => (
            <div key={i} className="icon">{icon}</div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .marquee {
          overflow: hidden;
          width: 100%;
        }
        .marquee__inner {
          display: flex;
          width: fit-content;
          animation: scroll 17s linear infinite;
        }
        .icon {
          flex-shrink: 0;
          margin-right: 4rem;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* Pause on hover */
        .marquee:hover .marquee__inner {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default About;
