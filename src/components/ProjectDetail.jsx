import { useParams } from 'react-router-dom';
import Dataprojects from '../Dataprojects';

const ProjectDetail = () => {
  const { projectTitle } = useParams();

  // Encuentra el proyecto específico en Dataprojects
  const project = Dataprojects.find((project) => project.title.toLowerCase() === projectTitle);

  // Si el proyecto no se encuentra, puedes manejarlo adecuadamente (por ejemplo, redirigir o mostrar un mensaje de error)
  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-2">{`Año: ${project.year}`}</p>
      <p className="text-lg mb-2">{`Cliente: ${project.client}`}</p>
      <p className="text-lg mb-2">{`Mi Rol: ${project.myrole}`}</p>
      <p className="text-lg mb-4">{`Descripción: ${project.description}`}</p>

      <p className="text-lg mb-2">{`Herramientas: ${project.tools}`}</p>
      <p className="text-lg mb-2">{`Tipo de Proyecto: ${project.typeproject}`}</p>

      <img src={project.imageThumbnail} alt={`${project.title} Thumbnail`} className="max-w-full mb-4" />

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Ver prototipo
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;
