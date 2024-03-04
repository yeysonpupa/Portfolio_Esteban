import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Dataprojects from '../Dataprojects';

const ProjectsMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const yOffset = window.scrollY;
    const index = Math.floor(yOffset / window.innerHeight);
    setActiveIndex(index);
  };

  useEffect(() => {
    controls.start({ opacity: 1 });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className="projects-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {Dataprojects.map((project, index) => (
        <Link key={project.title} to={`/projects/${project.title.toLowerCase()}`}>
          <motion.div
            className={`project-item ${index === activeIndex ? 'active' : ''}`}
          >
            {project.title}
          </motion.div>
        </Link>
      ))}
      <style>
        {`
          .projects-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 24px 16px;
            background-color: #fff;
            min-height: 100vh; /* Ajusta según sea necesario */
            overflow-y: auto; /* Agrega scroll vertical si es necesario */
          }

          .project-item {
            cursor: pointer;
            font-size: 28px; /* Ajusta según sea necesario */
            margin-bottom: 16px;
            opacity: 0.5;
            transition: opacity 0.3s ease-in-out;
          }

          .project-item.active {
            opacity: 1;
          }
        `}
      </style>
    </motion.div>
  );
};

export default ProjectsMenu;
