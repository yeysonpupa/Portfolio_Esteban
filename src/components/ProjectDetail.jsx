import { Link, Navigate, useParams } from 'react-router-dom';
import Dataprojects from '../Dataprojects';
import Navbar from './Navbar';
import Divider from '../UI/Divider';
import Copyright from './Copyright';
import { useEffect, useRef } from 'react';
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { projectTitle } = useParams();
  const projectIndex = Dataprojects.findIndex((project) => project.title.toLowerCase() === projectTitle.toLowerCase());
  const project = Dataprojects[projectIndex];
  const nextProject = Dataprojects[(projectIndex + 1) % Dataprojects.length];
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

  const renderRoleWithLineBreaks = () => {
    return project.role.split('\n').map((paragraph, index) => (
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

        <div className="w-full mb-8 md:mb-16 relative h-full">
          <img
            id="bannerImage"
            src={project.imageBanner}
            alt={`${project.title}`}
            className="w-full h-72 md:h-full"
            style={{ objectFit: 'cover' }}
          />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="navCur border-2 border-primary bg-primary text-whiteBackground text-TextoPequeñoPhone md:text-TextoNormal px-6 py-2 rounded-full transition-all duration-300 font-manrope absolute bottom--1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-none"
            style={{
              overflow: 'visible',
          }}
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
          {renderRoleWithLineBreaks()}
        </div>

        <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText text-justify mb-2">Explore</p>
        <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText text-justify mb-4 md:mb-8">{`${project.explore}`}</p>

        <div className="imagePrototype mb-8 md:mb-16">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="imagePrototype"
          >
            <img
              src={project.imagePrototype}
              alt={`${project.title}`}
              className="w-full h-full imagePrototype"
            />
          </a>
        </div>

        <div className="flex flex-col md:flex-row relative bg-blackText">
          <div className="flex-1 pb-0 md:pb-8 p-4 md:p-8">
              <h2 className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-greyText text-justify mb-2 md:mb-4">Next Project</h2>
              <Link to={`/projects/${nextProject.title.toLowerCase()}`} className="font-manrope text-TextoGrande md:text-TituloMediano text-whiteBackground nav">
                  <span>{nextProject.title} 🡥</span>
              </Link>
          </div>
          <div className="flex-1 relative p-4 md:p-8">
              <Link to={`/projects/${nextProject.title.toLowerCase()}`} className="text-primary">
                  <img src={nextProject.imageBanner} alt={nextProject.title} className="w-full h-full object-cover nav"/>
              </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default ProjectDetail;