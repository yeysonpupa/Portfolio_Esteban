import Lines from '../assets/images/lines.svg';

const Keys = () => {
    return (
        <div className="pr-8 pl-8 pt-8 bg-whiteBackground">
            <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText">
                Have an idea in mind{' '}
                <span className="text-TextoMedianoPhone md:text-TituloNormal text-primary font-manrope">?</span>
            </p>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">
                {`Let's bring it to reality`}
            </p>
            <div className="flex items-start justify-start pt-4 md:pt-8">
                <div className="mt-1">
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">
                        4 pillars I bring <br /> into every project
                    </p>
                </div>

                <div className="ml-2 md:ml-4 pt-0 md:pt-5">
                    <img
                        src={Lines}
                        alt="Arrow Icon"
                        className="w-15 h-15 transform scale-x-50 scale-y-50 md:scale-x-100 md:scale-y-100"
                    />
                </div>

                <div className="ml-2 md:ml-4">
                    <p className="font-manrope text-TextoGrande md:text-TituloMediano text-blackText">Research</p>
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">
                        Here I understand the essence of the user’s needs and paint a vivid portrait of purpose, ensuring every design choice has intention.
                    </p>
                </div>
            </div>
        </div>
    );
};
  
export default Keys;
