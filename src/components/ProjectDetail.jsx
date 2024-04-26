import { Navigate, useParams } from 'react-router-dom';
import Dataprojects from '../Dataprojects';
import Navbar from './Navbar';
import Divider from '../UI/Divider';
import Copyright from './Copyright';
import { useEffect, useRef } from 'react';

const ProjectDetail = () => {
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
    return <Navigate to="/" />
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
        <div className="grid grid-cols-1 bg-whiteBackground mb-2 md:mb-4">
          <div ref={textRef} className="mb-2">
            <div>
              <h1 className="font-manrope text-TituloNormal md:text-TituloGrande text-blackText"> <span className="font-manrope text-TituloExtraGrandePhone md:text-TituloGrande text-primary">{`//`}</span>{project.title}</h1>
            </div>
            <div className="flex flex-col md:flex-row pt-4 md:pt-8">
              <div className="pr-0 md:pr-20 mb-2">
                <div>
                  <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText text-justify">Year</p>
                  <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText text-justify">{`${project.year}`}</p>
                </div>
              </div>
  
              <div className="pr-0 md:pr-20 mb-2">
              <div>
                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">Client</p>
                <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText">{`${project.client}`}</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">Type</p>
                <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText">{`${project.typeproject}`}</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-8 md:mb-16 relative h-48 md:h-full">
          <img
            id="bannerImage"
            src={project.imageBanner}
            alt={`${project.title}`}
            className="w-full h-48 md:h-full"
            style={{ objectFit: 'cover' }}
          />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="navCur border-2 border-primary bg-primary text-whiteBackground text-TextoPequeñoPhone md:text-TextoNormal px-6 py-2 rounded-full transition-all duration-300 font-manrope absolute bottom--1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-none"
          >
            Explore
          </a>
        </div>


        <div>
          <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText text-justify mb-2">The Idea</p>
          {renderDescriptionWithLineBreaks()}
        </div>

        <div>
          <p className="mb-4 md:mb-8 font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{`${project.tools}`}</p>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row mb-4 md:mb-8">
          <div className="navCur w-full h-96 bg-primary mr-2 mb-2">
            <div className="p-8">
              <span className="font-museomoderno text-TituloMediano text-whiteBackground font-extrabold">{`“`}</span>
              <p className="font-manrope text-TextoGrande md:text-TituloNormal text-whiteBackground font-extrabold">{`${project.slogan}`}</p>
            </div>
          </div>
          <div className="w-full h-96 flex items-center justify-center py-8">
            <img
              id="bannerImage"
              src={project.imageQuote}
              alt={`${project.title}`}
              className="w-full h-96"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="mb-4 md:mb-8 font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText text-justify">
          <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText text-justify mb-2">My Role</p>
          {`${project.role}`}
        </div>

        <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText text-justify mb-4 md:mb-8">Explore</p>

        <div className="imagePrototype">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="imagePrototype"
          >
            <img
              src={project.imagePrototype}
              alt={`${project.title}`}
              className="w-full imagePrototype"
            />
          </a>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default ProjectDetail;