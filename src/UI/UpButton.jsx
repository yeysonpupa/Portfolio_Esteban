import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpIconPrimary from '../assets/images/arrowup-primary.svg';
import ArrowUpIconWhite from '../assets/images/arrowup-white.svg';
import Cursor from './Cursor';

const UpButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <div>
      <Cursor isHovering={isHovering} />
      <button
        className={`navCur bg-transparent border-2 border-primary rounded-full mr-8 md:mr-16 p-1 md:p-2 cursor-none transition-all duration-300 ${isHovered ? 'hover:bg-primary' : ''} absolute top-1/2 right-0 transform -translate-y-1/2`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={scrollToTop}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <div className="flex items-center justify-center">
          {isHovered ? (
            <img src={ArrowUpIconWhite} alt="Arrow Icon" className="w-6 h-auto md:w-12" />
          ) : (
            <img src={ArrowUpIconPrimary} alt="Arrow Icon" className="w-6 h-auto md:w-12" />
          )}
        </div>
      </button>
    </div>
  );
};

export default UpButton;