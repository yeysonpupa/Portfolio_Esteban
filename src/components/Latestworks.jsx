import { Link } from 'react-router-dom';
import Dataprojects from '../Dataprojects';
import { useState } from 'react';

const LatestWorks = () => {
    const [isHoveringSee, setIsHoveringSee] = useState(false);
    const [hoveredImage1, setHoveredImage1] = useState(false);
    const [hoveredImage2, setHoveredImage2] = useState(false);
    const [hoveredImage3, setHoveredImage3] = useState(false);

    const handleHoverImage1 = () => {
        setHoveredImage1(!hoveredImage1);
    };

    const handleHoverImage2 = () => {
        setHoveredImage2(!hoveredImage2);
    };

    const handleHoverImage3 = () => {
        setHoveredImage3(!hoveredImage3);
    };
    
    return (
        <div className="pr-8 pl-8 md:pr-16 md:pl-16 pt-6 bg-whiteBackground">
            <div className="flex items-center justify-between">
                <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText">
                    Latest Projects<span className="text-TextoMedianoPhone md:text-TituloNormal text-primary font-museomoderno">.</span>
                </p>
                <Link
                    to="/projects"
                    className="nav font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText"
                    onMouseOver={() => setIsHoveringSee(true)}
                    onMouseOut={() => setIsHoveringSee(false)}
                    style={{
                        transition: 'color 1s ease-in-out, text-decoration 1s ease-in-out',
                        textDecoration: isHoveringSee ? 'underline' : 'none',
                        color: isHoveringSee ? 'black' : 'inherit',
                    }}>
                        See All
                </Link>
            </div>

            <div className="flex flex-col mt-4 md:flex-row md:mt-8">
                <div className="w-full md:w-1/2 pr-0 md:pr-4 pb-4 md:pb-0 flex flex-col">
                    <div
                        className="relative h-full mb-2 imagePrototype"
                        style={{
                            overflow: 'hidden',
                        }}
                    >
                        <Link to={`/projects/${Dataprojects[4].title.toLowerCase()}`}>
                            <img
                                src={Dataprojects[4].imageThumbnail}
                                alt={Dataprojects[4].title}
                                className="w-full h-full flex-1 imagePrototype"
                                style={{ objectFit: 'cover', transform: `scale(${hoveredImage1 ? 1.1 : 1})`, transition: 'transform 0.3s ease', }}
                                onMouseEnter={handleHoverImage1}
                                onMouseLeave={handleHoverImage1}
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">{Dataprojects[4].title}</p>
                        <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{Dataprojects[4].typeproject}</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col">
                    <div className="mb-2 flex-1 imagePrototype">
                        <div
                            className="relative h-full imagePrototype"
                            style={{
                            overflow: 'hidden',
                            }}
                        >
                            <Link to={`/projects/${Dataprojects[7].title.toLowerCase()}`}>
                                <img 
                                    src={Dataprojects[7].imageThumbnail}
                                    alt={Dataprojects[7].title} 
                                    className="w-full max-h-full md:max-h-56 2xl:max-h-96 imagePrototype" 
                                    style={{objectFit: 'cover', transform: `scale(${hoveredImage2 ? 1.1 : 1})`, transition: 'transform 0.3s ease', }}
                                    onMouseEnter={handleHoverImage2}
                                    onMouseLeave={handleHoverImage2}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <div className="mb-4">
                            <div className="flex items-center justify-between">
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">{Dataprojects[7].title}</p>
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{Dataprojects[7].typeproject}</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 flex-1 imagePrototype">
                                <div
                                    className="relative h-full imagePrototype"
                                    style={{
                                    overflow: 'hidden',
                                    }}
                                 >
                                    <Link to={`/projects/${Dataprojects[8].title.toLowerCase()}`}>
                                        <img 
                                            src={Dataprojects[8].imageThumbnail}
                                            alt={Dataprojects[8].title} 
                                            className="w-full max-h-full md:max-h-56 2xl:max-h-96 imagePrototype" 
                                            style={{objectFit: 'cover', transform: `scale(${hoveredImage3 ? 1.1 : 1})`, transition: 'transform 0.3s ease', }}
                                            onMouseEnter={handleHoverImage3}
                                            onMouseLeave={handleHoverImage3}
                                        /> 
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">{Dataprojects[8].title}</p>
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{Dataprojects[8].typeproject}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestWorks;