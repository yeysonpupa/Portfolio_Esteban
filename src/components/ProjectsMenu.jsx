import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dataprojects from '../Dataprojects';
import Navbar from './Navbar';
import Copyright from './Copyright';
import Divider from '../UI/Divider';

const ProjectsMenu = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [navbarTextColor, setNavbarTextColor] = useState('text-blackText');

  const handleHoverProject = (project) => {
    setHoveredProject(project);
    setNavbarTextColor('text-whiteBackground');
  };

  const handleLeaveProject = () => {
    setHoveredProject(null);
    setNavbarTextColor('text-blackText');
  };

  return (
    <div className={`principal ${hoveredProject ? 'bg-black' : 'bg-whiteBackground'}`}>
      <Navbar navbarTextColor={navbarTextColor} />
      <Divider />
      <div
        className="bg-cover bg-center bg-no-repeat fixed top-0 left-0 w-full h-full opacity-70 z-0"
        style={{
          backgroundImage: hoveredProject
            ? `url(${hoveredProject.imageThumbnail})`
            : 'none',
          transition: 'opacity 1000ms ease',
          opacity: hoveredProject ? 0.70 : 0,
        }}
      />
      <div className="flex flex-col items-center md:items-start justify-center pr-8 pl-8 md:pr-16 md:pl-16 pt-8 md:pt-16 bg-transparent min-h-screen relative">
        {Dataprojects.map((project, index) => (
          <Link
            key={project.title}
            to={`/projects/${project.title.toLowerCase()}`}
            onMouseEnter={() => handleHoverProject(project)}
            onMouseLeave={handleLeaveProject}
          >
            <div className={`imagePrototype cursor-none font-manrope ${hoveredProject ? 'text-TituloNormal md:text-TituloGrande text-whiteBackground' : 'text-TituloNormal md:text-TituloGrande text-blackText'} font-medium leading-none pb-8 ${index !== Dataprojects.length - 1 ? 'mb-6 md:mb-28' : ''}`} style={{ fontWeight: hoveredProject === project ? 'bold' : 'normal', opacity: hoveredProject ? (hoveredProject === project ? 1 : 0.50) : 1 }}>
              {project.title}
            </div>
          </Link>
        ))}
        {hoveredProject && (
          <div className="fixed bottom-0 right-0 pr-8 md:pr-16 pb-4">
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-whiteBackground">
              {hoveredProject.typeproject}
            </p>
          </div>
        )}
      </div>
      <Copyright />
    </div>
  );
};

export default ProjectsMenu;