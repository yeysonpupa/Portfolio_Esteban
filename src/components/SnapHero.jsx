const SnapHero = () => {
  return (
    <div className="pr-8 pl-8 md:pr-16 md:pl-16 pt-8 md:pt-16 pb-4 md:pb-16 bg-whiteBackground">
      <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText ml-1">
        Hope you like it!
      </p>

      <p className="font-museomoderno text-TituloExtraGrandePhone md:text-TituloGrande text-blackText leading-none pb-8">
        I snap <span className="font-zillaslab text-TituloExtraGrandePhone md:text-TituloGrande text-primary">{`pictures`}</span> <br />
        when not coding
      </p>
    </div>
  );
};

export default SnapHero;
