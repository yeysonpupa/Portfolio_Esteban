import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dataprojects from '../Dataprojects';
import Navbar from './Navbar';
import Copyright from './Copyright';
import Divider from '../UI/Divider';

const ProjectsMenu = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className={`principal ${hoveredProject ? 'bg-black' : 'bg-whiteBackground'}`}>
      <Navbar />
      <Divider />
      <div className="bg-cover bg-center bg-no-repeat fixed top-0 left-0 w-full h-full opacity-75 z-0" style={{ backgroundImage: hoveredProject ? `url(${hoveredProject.imageThumbnail})` : 'none' }} />
      <div className="flex flex-col items-center md:items-start justify-center pr-8 pl-8 md:pr-16 md:pl-16 pt-8 md:pt-16 bg-transparent min-h-screen relative">
        {Dataprojects.map((project, index) => (
          <Link
            key={project.title}
            to={`/projects/${project.title.toLowerCase()}`}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`imagePrototype cursor-none font-manrope ${hoveredProject ? 'text-TituloExtraGrandePhone md:text-TituloGrande text-whiteBackground' : 'text-TituloExtraGrandePhone md:text-TituloGrande text-blackText'} font-medium leading-none pb-8 ${index !== Dataprojects.length - 1 ? 'mb-6 md:mb-28' : ''}`} style={{ fontWeight: hoveredProject === project ? 'bold' : 'normal', opacity: hoveredProject ? (hoveredProject === project ? 1 : 0.75) : 1 }}>
              {project.title}
            </div>
          </Link>
        ))}
      </div>
      <Copyright />
    </div>
  );
};

export default ProjectsMenu;
