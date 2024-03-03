import { Link } from 'react-router-dom';
import Dataprojects from '../Dataprojects';

const LatestWorks = () => {
    
    const handleHover = () => {
        setHovered(!hovered);
    };
    
    return (
        <div className="pr-8 pl-8 md:pr-16 md:pl-16 pt-8 bg-whiteBackground">
            <div className="flex items-center justify-between">
                <p className="font-manrope text-TextoMedianoPhone md:text-TituloNormal text-blackText">
                    Latest Projects<span className="text-TextoMedianoPhone md:text-TituloNormal text-primary font-museomoderno">.</span>
                </p>
                <Link to="/projects" className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">
                    See All
                </Link>
            </div>

            <div className="flex mt-8">
                <div className="w-1/2 pr-4 flex flex-col">
                    <img
                        src={Dataprojects[1].imageThumbnail}
                        alt={Dataprojects[1].title}
                        className="w-full mb-2 flex-1"
                        style={{ objectFit: 'cover', maxHeight: '100%' }}
                    />
                    <div className="flex items-center justify-between">
                        <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">{Dataprojects[1].title}</p>
                        <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{Dataprojects[1].typeproject}</p>
                    </div>
                </div>

                <div className="w-1/2 pl-4 flex flex-col">
                    <div className="mb-2 flex-1">
                        <img src={Dataprojects[4].imageThumbnail} alt={Dataprojects[4].title} className="w-full h-full" style={{objectFit: 'cover', maxHeight: '200px'}}/>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <div className="mb-4">
                            <div className="flex items-center justify-between">
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-blackText">{Dataprojects[4].title}</p>
                                <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText">{Dataprojects[4].typeproject}</p>
                            </div>
                        </div>
                        <div>
                            <img src={Dataprojects[0].imageThumbnail} alt={Dataprojects[0].title} className="w-full mb-2 h-full" style={{objectFit: 'cover', maxHeight: '200px'}}/>
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
