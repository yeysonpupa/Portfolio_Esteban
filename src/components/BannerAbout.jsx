import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';

const BannerAbout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const initialTransform = isMobile ? 'translateX(-200%)' : 'translateX(-115%)';
  const endTransform = isMobile ? 'translateX(4%)' : 'translateX(0%)';
  const duration = isMobile ? 10000 : 12000;

  const [props, set] = useSpring(() => ({
    from: { transform: initialTransform },
    to: { transform: endTransform },
    config: { duration },
    onRest: () => {
      set({
        from: { transform: endTransform },
        to: { transform: initialTransform },
      });
    },
  }));

  return (  
    <div className="bg-whiteBackground" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <animated.div style={props}>
        <p>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Figma
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            ReactJS
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Tailwind CSS
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            JavaScript
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Adobe Photoshop
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Figma
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            ReactJS
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Tailwind CSS
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            JavaScript
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Adobe Photoshop
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
        </p>
      </animated.div>
    </div>
  );
};

export default BannerAbout;
