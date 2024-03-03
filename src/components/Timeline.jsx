import Yearline from "../UI/Yearline";

const Timeline = () => {
    return (
        <div className="pl-8 md:pl-16 pt-8 bg-whiteBackground">
            <div className="flex">
                <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText pr-4 md:pr-8" style={{ whiteSpace: 'nowrap' }}>
                    2020 - Present
                </p>
                <Yearline />
            </div>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText mt-2 md:mt-4 text-justify pr-8 md:pr-16">
                {`Degree in informatics engineering at the University of La Sabana. Member of the Human-Centered Design (HCD) research team, committed to conceiving, prototyping, and developing technological solutions.`}
            </p>
            <div className="pr-8 md:pr-16">
                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText mt-2 md:mt-4 text-justify ml-10 md:ml-20">
                    <span className="text-primary font-manrope text-TextoPequeñoPhone md:text-TextoNormal">2023 -</span>{` First place winner in the seventh edition of SabanaHack.`}
                </p>
                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText mt-1 md:mt-2 text-justify ml-10 md:ml-20">
                    <span className="text-primary font-manrope text-TextoPequeñoPhone md:text-TextoNormal">2023 -</span>{` First place winner in the first edition of Unisabana Design Challenge.`}
                </p>
                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText mt-1 md:mt-2 text-justify ml-10 md:ml-20">
                    <span className="text-primary font-manrope text-TextoPequeñoPhone md:text-TextoNormal">2022 -</span>{` Second place winner in the sixth edition of SabanaHack.`}
                </p>
                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText mt-1 md:mt-2 text-justify ml-10 md:ml-20">
                    <span className="text-primary font-manrope text-TextoPequeñoPhone md:text-TextoNormal">2022 -</span>{` Second place winner in the fifth edition of SabanaHack.`}
                </p>
            </div>
            <div className="flex mt-2 md:mt-4">
                <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText pr-4 md:pr-8" style={{ whiteSpace: 'nowrap' }}>
                    May - Nov 2022
                </p>
                <Yearline />
            </div>
            <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText mt-2 md:mt-4 text-justify pr-8 md:pr-16">
                {`Junior Front-End Developer at Dooku Startup, a project initiated under the leadership of law graduates from EAFIT University in Medellín, Colombia.`}
            </p>
        </div>
    );
};
  
export default Timeline;
