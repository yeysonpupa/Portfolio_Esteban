import ArrowIcon from '../assets/images/arrow.svg';

const Hero = () => {
  return (
    <div className="pr-8 pl-8 pt-8 md:pt-16 bg-whiteBackground">
      <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText ml-1">
        Hello there! I am Esteban Pulido
      </p>

      <p className="font-museomoderno text-TituloExtraGrandePhone md:text-TituloGrande text-blackText leading-none">
        Web Developer
      </p>

      <div className="flex items-center justify-center">
        <img src={ArrowIcon} alt="Arrow Icon" className="w-15 h-15 pt-10 pl-10 pb-5" />
      </div>

      <div className="flex items-center justify-end">
        <p className="font-museomoderno text-TituloExtraGrandePhone md:text-TituloGrande text-blackText pt-10 pr-0 md:pt-10 md:pr-40 leading-6">
          UI/UX
        </p>
      </div>

      <div className="flex items-center justify-end">
        <p className="text-TextoPequeñoPhone md:text-TextoNormal text-greyText font-manrope pt-5 pr-0 md:pt-10 md:pr-40 leading-none">
          and much more...
        </p>
      </div>

      <p className="font-manrope text-TextoGrande pt-5 md:pt-0 md:text-TituloMediano text-blackText leading-tight">
        What are we{' '}
        <span className="font-zillaslab text-primary">
          <br /> creating
        </span>{' '}
        today?{' '}
      </p>

      <div className="flex flex-col items-end">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary text-blackText text-TextoPequeñoPhone md:text-TextoNormal px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-whiteBackground mb-2 font-manrope"
        >
          LinkedIn
        </a>

        <a
          href="https://www.your-resume-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary text-blackText text-TextoPequeñoPhone md:text-TextoNormal px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-whiteBackground mb-2 font-manrope"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
