import ArrowIcon from '../assets/images/arrow.svg';

const Hero = () => {
  return (
    <div className="p-16">
        <p className="font-manrope text-TextoNormal text-greyText ml-1">Hello there! I am Esteban Pulido</p>

        <p className="font-museomoderno text-TituloGrande text-blackText leading-none">Web Developer</p>

        <div className="flex items-center justify-center">
            <img src={ArrowIcon} alt="Arrow Icon" className="w-15 h-15 pt-10 pl-10" />
        </div>

        <div className="flex items-center justify-end">
            <p className="font-museomoderno text-TituloGrande text-blackText pt-10 pr-40 leading-6">UI/UX</p>
        </div>
      
        <div className="flex items-center justify-end">
            <p className="text-TextoNormal text-greyText font-manrope pt-10 pr-40 leading-none">and much more...</p>
        </div>

        <p className="font-manrope text-TituloMediano text-blackText leading-tight"> What are we <span className="font-zillaslab text-primary"><br />creating</span> today? </p>
    </div>
  );
};

export default Hero;