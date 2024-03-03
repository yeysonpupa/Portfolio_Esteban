import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';

const BannerHome = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const initialTransform = isMobile ? 'translateX(-200%)' : 'translateX(-69%)';
  const endTransform = isMobile ? 'translateX(4%)' : 'translateX(2%)';
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
            Informatics Engineer
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Front-End Developer
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Responsive Design
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Coffee Addict
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-blackText">
            Figma Enthusiast
          </span>
          <span className="font-museomoderno text-TextoMedianoPhone md:text-TituloNormal text-primary"> • </span>
        </p>
      </animated.div>
    </div>
  );
};

export default BannerHome;
