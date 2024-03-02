import { useSpring, animated } from 'react-spring';

const Banner = () => {
  const [props, set] = useSpring(() => ({
    from: { transform: 'translateX(-69%)' },
    to: { transform: 'translateX(2%)' },
    config: { duration: 15000 },
    onRest: () => {
      set({
        from: { transform: 'translateX(2%)' },
        to: { transform: 'translateX(-69%)' },
      });
    },
  }));

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
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

export default Banner;