const Keys = () => {
    return (
        <div className="pr-8 pl-8 md:pr-16 md:pl-16 pt-8 bg-whiteBackground">
            <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText">
                Have an idea in mind{' '}
                <span className="text-TextoMedianoPhone md:text-TituloNormal text-primary font-manrope">?</span>
            </p>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">
                {`Let's bring it to reality`}
            </p>
            <div className="flex flex-col md:flex-row justify-start pt-4 md:pt-8">
                <div className="mt-0 md:mt-4">
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">
                        4 pillars I bring to every project
                    </p>
                </div>

                <div>
                    <p className="font-manrope text-TextoGrande md:text-TituloMediano text-blackText"><span className="font-manrope text-TextoGrande md:text-TituloMediano text-primary">{`// `}</span>Research</p>
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText ml-8 md:ml-16">
                        {`Here I understand the essence of the user's needs and paint a vivid portrait of purpose, ensuring every design choice has intention.`}
                    </p>
                    <p className="font-zillaslab text-TextoGrande md:text-TituloMediano text-primary pt-4 md:pt-6 ml-8 md:ml-16">Design</p>
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText ml-8 md:ml-16">
                        {`From wireframes to high-fidelity prototypes, I craft pixels into experiences, creating a tapestry of intuitive interactions that captivate and delight users.`}
                    </p>
                    <p className="font-manrope text-TextoGrande md:text-TituloMediano text-blackText pt-4 md:pt-6 ml-8 md:ml-16">Develop</p>
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText ml-8 md:ml-16">
                        {`Giving life to my designs through careful coding, I turn imaginative concepts into functional, engaging realities with precision and skill.`}
                    </p>
                    <p className="font-manrope text-TextoGrande md:text-TituloMediano text-blackText pt-4 md:pt-6 ml-8 md:ml-16">Think out of the box</p>
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText ml-8 md:ml-16">
                        {`In every step, innovation is my guiding architect, bridging imagination and design with a fresh perspective.`}
                    </p>
                </div>
            </div>
        </div>
    );
};
  
export default Keys;
