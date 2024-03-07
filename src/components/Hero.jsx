import { useState, useEffect } from 'react';
import ArrowIcon from '../assets/images/arrow.svg';
import Cursor from '../UI/Cursor';

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
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
      <Cursor isHovering={isHovering} />
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
          className="mr-0 md:mr-5 xl:ml-20 2xl:ml-0 2xl:mr-96 w-15 h-15 pt-2 pb-0 md:pt-10 md:pb-5 transform scale-x-50 scale-y-50 md:scale-x-100 md:scale-y-100"
        />
      </div>

      <div className="flex items-center justify-end 2xl:justify-center md:ml-5 2xl:ml-96 xl:mr-10 2xl:mr-40">
        <p className="font-museomoderno text-TituloExtraGrandePhone md:text-TituloGrande text-blackText pt-5 pr-0 md:pt-11 md:pr-40 leading-6">
          UI/UX
        </p>
      </div>

      <div className="flex items-center justify-end 2xl:justify-center md:ml-5 xl:ml-96 xl:mr-10 2xl:mr-0">
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
          className="navCur border-2 border-primary text-blackText text-TextoPequeñoPhone md:text-TextoNormal px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-whiteBackground mb-2 font-manrope cursor-none"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          LinkedIn
        </a>

        <a
          href="https://www.canva.com/design/DAF-xqdbyS0/tVsHEfDmDrOw9-rjhHnmQQ/view?utm_content=DAF-xqdbyS0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          target="_blank"
          rel="noopener noreferrer"
          className="navCur border-2 border-primary text-blackText text-TextoPequeñoPhone md:text-TextoNormal px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-whiteBackground font-manrope cursor-none"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;