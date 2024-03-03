import { Link } from 'react-router-dom';
import Dataprojects from '../Dataprojects';
import { useState } from 'react';

const LatestWorks = () => {

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
                <Link to="/projects" className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">
                    See All
                </Link>
            </div>

            <div className="flex mt-4 md:mt-8">
                <div className="w-1/2 pr-4 flex flex-col">
                    <div
                        className="relative h-full mb-2"
                        style={{
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={Dataprojects[1].imageThumbnail}
                            alt={Dataprojects[1].title}
                            className="w-full h-full flex-1"
                            style={{ objectFit: 'cover', maxHeight: '100%', transform: `scale(${hoveredImage1 ? 1.1 : 1})`, transition: 'transform 0.3s ease', }}
                            onMouseEnter={handleHoverImage1}
                            onMouseLeave={handleHoverImage1}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">{Dataprojects[1].title}</p>
                        <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{Dataprojects[1].typeproject}</p>
                    </div>
                </div>

                <div className="w-1/2 pl-4 flex flex-col">
                    <div className="mb-2 flex-1">
                        <div
                            className="relative h-full"
                            style={{
                            overflow: 'hidden',
                            }}
                        >
                            <img 
                                src={Dataprojects[4].imageThumbnail} alt={Dataprojects[4].title} 
                                className="w-full h-full" 
                                style={{objectFit: 'cover', maxHeight: '200px', transform: `scale(${hoveredImage2 ? 1.1 : 1})`, transition: 'transform 0.3s ease', }}
                                onMouseEnter={handleHoverImage2}
                                onMouseLeave={handleHoverImage2}
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <div className="mb-4">
                            <div className="flex items-center justify-between">
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">{Dataprojects[4].title}</p>
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{Dataprojects[4].typeproject}</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 flex-1">
                                <div
                                    className="relative h-full"
                                    style={{
                                    overflow: 'hidden',
                                    }}
                                 >
                                    <img 
                                        src={Dataprojects[0].imageThumbnail}
                                        alt={Dataprojects[0].title} 
                                        className="w-full h-full" 
                                        style={{objectFit: 'cover', maxHeight: '200px', transform: `scale(${hoveredImage3 ? 1.1 : 1})`, transition: 'transform 0.3s ease', }}
                                        onMouseEnter={handleHoverImage3}
                                        onMouseLeave={handleHoverImage3}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">{Dataprojects[0].title}</p>
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{Dataprojects[0].typeproject}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestWorks;
