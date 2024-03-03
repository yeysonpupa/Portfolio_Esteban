import Firma from '../assets/images/firma.svg';

const Footer = () => {
  const emailAddress = 'estebanpulidodev@gmail.com';

  return (
    <div className="flex flex-col items-center justify-center pr-8 pl-8 md:pr-16 md:pl-16 pt-8 md:pt-16">
      <img
        src={Firma}
        alt="Firma Icon"
        className="w-36 h-auto md:w-80"
      />
      <h1 className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText">
        {`Let's Connect`}<span className="text-primary">!</span>
      </h1>
      <p className="text-TextoMedianoPhone md:text-TextoGrande text-blackText font-manrope">
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
      </p>
    </div>
  );
};

export default Footer;
