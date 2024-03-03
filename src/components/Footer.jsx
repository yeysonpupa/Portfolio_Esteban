import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Firma from '../assets/images/firma.svg';
import ArrowUpIconPrimary from '../assets/images/arrowup-primary.svg';
import ArrowUpIconWhite from '../assets/images/arrowup-white.svg';

const Footer = () => {
  const emailAddress = 'estebanpulidodev@gmail.com';
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center pt-8 md:pt-16">
      <div className="flex flex-col items-center">
        <img
          src={Firma}
          alt="Firma Icon"
          className="w-36 h-auto md:w-80 mb-1 md:mb-2"
        />

        <h1 className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText mb-1 md:mb-2">
          {`Let's Connect`}
          <span className="text-primary font-manrope text-TextoMedianoPhone md:text-TituloNormal">!</span>
        </h1>

        <p className="text-TextoNormal md:text-TextoGrande text-blackText font-manrope mb-4 md:mb-8">
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </p>
      </div>

      <button
        className={`bg-transparent border-2 border-primary rounded-full mr-8 md:mr-16 p-1 md:p-2 cursor-none transition-all duration-300 ${isHovered ? 'hover:bg-primary' : ''} absolute top-1/2 right-0 transform -translate-y-1/2`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={scrollToTop}
      >
        <div className="flex items-center justify-center">
          {isHovered ? (
            <img src={ArrowUpIconWhite} alt="Arrow Icon" className="w-6 h-auto md:w-12" />
          ) : (
            <img src={ArrowUpIconPrimary} alt="Arrow Icon" className="w-6 h-auto md:w-12" />
          )}
        </div>
      </button>
    </div>
  );
};

export default Footer;
