import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const LoaderMain = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : prevProgress));
    }, 20);

    const loadingTimeout = setTimeout(() => {
      clearInterval(interval);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  const loaderAnimation = useSpring({
    opacity: progress < 100 ? 1 : 0,
    config: { duration: 2000 },
  });

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-whiteBackground">
      <animated.div style={loaderAnimation} className="absolute top-0 left-0  font-manrope text-TextoMedianoPhone md:text-TextoGrande pl-8 md:pl-16 pt-2 md:pt-4">
        {progress}%
      </animated.div>
      <div
        className="w-10 h-10 border-2 border-primary bg-primary rounded-full animate-pulse"
        style={{
          animationDuration: '1.5s',
          animationIterationCount: 'infinite',
        }}
      ></div>
    </div>
  );
};

export default LoaderMain;
