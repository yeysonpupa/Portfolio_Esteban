import SignatureIcon from '../assets/images/signature.svg';
import UpButton from '../UI/UpButton';

const Footer = () => {
  const emailAddress = 'estebanpulidodev@gmail.com';

  return (
    <div className="relative flex flex-col items-center justify-center pt-8 md:pt-16">
      <div className="flex flex-col items-center">
        <img
          src={SignatureIcon}
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

      <UpButton />
    </div>
  );
};

export default Footer;
