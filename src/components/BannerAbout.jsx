import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';

const BannerAbout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1535 });
  const is2xl = useMediaQuery({ minWidth: 1536 });

  let initialTransform, endTransform, duration;

  if (isMobile) {
    initialTransform = 'translateX(-170%)';
    endTransform = 'translateX(4%)';
    duration = 10000;
  } else if (isLaptop) {
    initialTransform = 'translateX(-115%)';
    endTransform = 'translateX(0%)';
    duration = 12000;
  } else if (is2xl) {
    initialTransform = 'translateX(1%)';
    endTransform = 'translateX(-100%)';
    duration = 14000;
  }

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
        </p>
      </animated.div>
    </div>
  );
};

export default BannerAbout;
