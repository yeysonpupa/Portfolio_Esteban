import { Link } from 'react-router-dom';
import Dataprojects from '../Dataprojects';

const ProjectsMenu = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center pr-8 pl-8 md:pr-16 md:pl-16 pt-8 md:pt-16 bg-whiteBackground min-h-screen">
      {Dataprojects.map((project, index) => (
        <Link key={project.title} to={`/projects/${project.title.toLowerCase()}`}>
          <div className={`imagePrototype cursor-none font-manrope text-TituloExtraGrandePhone md:text-TituloGrande text-blackText leading-none pb-8 ${index !== Dataprojects.length - 1 ? 'mb-6 md:mb-28' : ''}`}>
            {project.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsMenu;
