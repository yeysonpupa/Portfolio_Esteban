import AboutPhoto1 from '../assets/images/AboutPhoto1.png';
import AboutPhoto2 from '../assets/images/AboutPhoto2.png';
import AboutPhoto3 from '../assets/images/AboutPhoto3.png';
import AboutPhoto4 from '../assets/images/AboutPhoto4.png';

const GalleryAbout = () => {
    return (
        <div className="pr-8 pl-8 md:pr-16 md:pl-16 pt-8 bg-whiteBackground">
            <div className="flex flex-row mb-4 md:mb-8">
                <div className="navCur w-full h-full bg-primary mb-2">
                    <div className="p-8">
                        <span className="font-museomoderno text-TituloMediano text-whiteBackground font-extrabold">{`“`}</span>
                        <p className="font-manrope text-TextoGrande md:text-TituloNormal text-whiteBackground font-extrabold">I think it’s the responsibility of a designer to try to break rules and barriers</p><br/>
                        <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-whiteBackground font-extrabold">- Gianni Versace</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-1">
                    <img
                    id="PhotoAbout1"
                    src={AboutPhoto1}
                    className="w-full h-full"
                    style={{ objectFit: 'cover' }}
                    />
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText pt-4">Unisabana Design Challenge 2023</p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-1">
                    <img
                    id="PhotoAbout2"
                    src={AboutPhoto2}
                    className="w-full h-full"
                    style={{ objectFit: 'cover' }}
                    />
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText pt-4">Sabana Hack 2023</p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-1 pt-8">
                    <img
                    id="PhotoAbout3"
                    src={AboutPhoto3}
                    className="w-full h-full"
                    style={{ objectFit: 'cover' }}
                    />
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText pt-4">Leading a Figma class for HCI students</p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-1 pt-8">
                    <img
                    id="PhotoAbout4"
                    src={AboutPhoto4}
                    className="w-full h-full"
                    style={{ objectFit: 'cover' }}
                    />
                    <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText pt-4">Sabana Hack 2022</p>
                </div>
            </div>
        </div>
    );
};
  
export default GalleryAbout;