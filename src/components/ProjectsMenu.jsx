import { Link } from 'react-router-dom';
import Dataprojects from '../Dataprojects';

const ProjectsMenu = () => {
  return (
    <div className="flex flex-col items-center pr-8 pl-8 md:pr-16 md:pl-16 pt-6 bg-whiteBackground">
      {Dataprojects.map((project) => (
        <Link key={project.title} to={`/projects/${project.title.toLowerCase()}`}>
          {/* Cambia la ruta a la nueva ruta para detalles del proyecto */}
          <div className="cursor-pointer font-manrope text-TituloExtraGrandePhone md:text-TituloGrande text-blackText leading-none pb-8">
            {project.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsMenu;
