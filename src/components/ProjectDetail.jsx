import { useParams } from 'react-router-dom';
import Dataprojects from '../Dataprojects';
import Navbar from './Navbar';
import Divider from '../UI/Divider';
import Copyright from './Copyright';
import { useEffect, useRef, useState } from 'react';
import Cursor from '../UI/Cursor';

const ProjectDetail = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { projectTitle } = useParams();
  const project = Dataprojects.find((project) => project.title.toLowerCase() === projectTitle);
  const textRef = useRef(null);

  useEffect(() => {
    const textHeight = textRef.current ? textRef.current.clientHeight : 0;

    const image = document.getElementById('mainImage');
    if (image) {
      image.style.height = `${textHeight}px`;
    }
  }, [project]);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const renderDescriptionWithLineBreaks = () => {
    return project.description.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4 md:mb-8 font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText text-justify">
        {paragraph}
      </p>
    ));
  };

  return (
    <div>
      <Navbar />
      <Divider />

      <div className="pr-8 pl-8 md:pr-16 md:pl-16 pt-8 md:pt-16 pb-4 bg-whiteBackground">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-whiteBackground mb-4 md:mb-8">
          <div ref={textRef} className="mb-4 md:mb-0 col-span-2">
            <h1 className="font-manrope text-TituloExtraGrandePhone md:text-TituloGrande text-blackText">{project.title}</h1>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">
              Year
            </p>
            <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText mb-2">
              {`${project.year}`}
            </p>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">
              Client
            </p>
            <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText mb-2">
              {`${project.client}`}
            </p>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">
              My Role
            </p>
            <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText">
              {`${project.myrole}`}
            </p>
          </div>

          <div className="relative flex justify-center items-center col-span-1">
            <img
              id="mainImage"
              src={project.imageMain}
              alt={`${project.title}`}
              className="w-full h-full"
              style={{ objectFit: 'cover', maxWidth: '400px' }}
            />
          </div>
        </div>

        <div>
          {renderDescriptionWithLineBreaks()}
        </div>

        <div>
          <p className="mb-4 md:mb-8 font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{`${project.tools}`}</p>
        </div>

        <div className="imagePrototype">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="imagePrototype"
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
          >
            <img
              src={project.imagePrototype}
              alt={`${project.title}`}
              className="max-w-full imagePrototype"
            />
          </a>
        </div>

        <Cursor isHovering={isHovering} />
        </div>

      <Copyright />
    </div>
  );
};

export default ProjectDetail;
