import MyPhoto from '../assets/images/MyPhoto.png';

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

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-0 md:pr-16">
          <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText text-justify">
            {`Concluding my informatics engineering degree and looking forward to immersing myself in professional internships, specifically emphasizing UI/UX and front-end development. I'm all about the attention to details, collaborative teamwork, and tackling challenges with a dash of critical thinking. Fluent in both Spanish and English, so let's make things happen!`}
          </p>

          <div className="pt-4 md:pt-8 pb-4 md:pb-8">
            <div className="mb-2 md:mb-4">
              <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText text-justify">From</p>
              <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText text-justify">Bogotá, Colombia</p>
            </div>

            <div className="mb-2 md:mb-4">
              <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">Currently</p>
              <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">Informatics engineering student</p>
            </div>

            <div>
              <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">Passionate about</p>
              <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">Technology • Digital Art • Photography</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <img
            src={MyPhoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <a
            href="https://www.canva.com/design/DAF-xqdbyS0/tVsHEfDmDrOw9-rjhHnmQQ/view?utm_content=DAF-xqdbyS0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
            rel="noopener noreferrer"
            className="navCur border-2 border-primary bg-primary text-whiteBackground text-TextoPequeñoPhone md:text-TextoNormal px-6 py-2 rounded-full transition-all duration-300 font-manrope absolute bottom--1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-none"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
