const AboutHero = () => {
  return (
    <div className="pr-8 pl-8 md:pr-16 md:pl-16 pt-8 md:pt-16 pb-8 bg-whiteBackground">
      <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText ml-1">
        A little bit more about me...
      </p>

      <p className="font-museomoderno text-TituloExtraGrandePhone md:text-TituloGrande text-blackText leading-none pb-8">
        Hello! I am <br />Esteban Pulido{' '}
        <span className="font-museomoderno text-TituloExtraGrandePhone md:text-TituloGrande text-primary">{`:)`}</span>
      </p>
      <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText text-justify">
        {`Concluding my informatics engineering degree and looking forward to immersing myself in professional internships, specifically emphasizing UI/UX and front-end development. I'm all about the attention to details, collaborative teamwork, and tackling challenges with a dash of critical thinking. Fluent in both Spanish and English, so let's make things happen!`}
      </p>

      <div className="flex flex-col md:flex-row pt-4 md:pt-8">
        <div className="pr-16 md:pr-32 mb-4 md:mb-0">
          <div>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText text-justify">From</p>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText text-justify">Bogotá, Colombia</p>
          </div>
        </div>

        <div className="pr-16 md:pr-32 mb-4 md:mb-0">
          <div>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">Currently</p>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">Informatics engineering student</p>
          </div>
        </div>

        <div>
          <div>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">Passionate about</p>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">Digital Art • Technology • Photography</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
