import { useState, useEffect } from 'react';
import ArrowIcon from '../assets/images/arrow.svg';

const Hero = () => {
  const [dynamicText, setDynamicText] = useState('');
  const words = ['Creating', 'Dreaming', 'Coding'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const pauseBeforeDelete = 2000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDynamicText((prevText) => {
        const currentWord = words[wordIndex];
        if (isDeleting) {
          return prevText.slice(0, -1);
        } else {
          return currentWord.slice(0, prevText.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [wordIndex, isDeleting, words]);

  useEffect(() => {
    if (dynamicText === words[wordIndex] && !isDeleting) {
      setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (dynamicText === '' && isDeleting) {
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
  }, [dynamicText, wordIndex, isDeleting, pauseBeforeDelete, words]);

  return (
    <div className="pr-8 pl-8 md:pr-16 md:pl-16 pt-8 md:pt-16 pb-8 bg-whiteBackground">
      <p className="font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-greyText ml-1">
        Hello there! I am Esteban Pulido
      </p>

      <p className="font-museomoderno text-TituloExtraGrandePhone md:text-TituloGrande text-blackText leading-none">
        Web Developer
      </p>

      <div className="flex items-center justify-center">
        <img
          src={ArrowIcon}
          alt="Arrow Icon"
          className="w-15 h-15 pt-2 pl-2 pb-0 md:pt-10 md:pl-40 md:pb-5 transform scale-x-50 scale-y-50 md:scale-x-100 md:scale-y-100"
        />
      </div>

      <div className="flex items-center justify-end">
        <p className="font-museomoderno text-TituloExtraGrandePhone md:text-TituloGrande text-blackText pt-5 pr-0 md:pt-11 md:pr-40 leading-6">
          UI/UX
        </p>
      </div>

      <div className="flex items-center justify-end">
        <p className="text-TextoPequeñoPhone md:text-TextoNormal text-greyText font-manrope pt-5 pr-0 md:pt-10 md:pr-40 leading-none">
          and much more...
        </p>
      </div>

      <p className="font-manrope text-TextoGrande pt-5 md:pt-0 md:text-TituloMediano text-blackText leading-tight">
        What are we{' '}
        <br />
        <span
          className="blink-vertical cursor-line font-museomoderno-100 font-thin text-greyText"
          style={{
            display: 'inline-block',
            animation: 'blink-vertical 0.75s step-end infinite',
          }}
        >
          |
        </span>
        <span className="font-zillaslab text-primary">{dynamicText}</span> today?
      </p>

      <style>
        {`
          @keyframes blink-vertical {
            from, to {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="flex flex-col items-end pt-10 md:pt-0">
        <a
          href="https://www.linkedin.com/in/yeyson-esteban-pulido-parra/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-primary text-blackText text-TextoPequeñoPhone md:text-TextoNormal px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-whiteBackground mb-2 font-manrope cursor-none"
        >
          LinkedIn
        </a>

        <a
          href="https://www.canva.com/design/DAFSPevxb6A/DpW_9JhzD4FeUvml77xuOg/view?"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-primary text-blackText text-TextoPequeñoPhone md:text-TextoNormal px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-whiteBackground font-manrope cursor-none"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;