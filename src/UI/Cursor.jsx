import { useState, useEffect, useRef } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => {
      setIsHovering(true);
    };

    const handleLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursorPosition);

    document.querySelectorAll('.imagePrototype').forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);

      document.querySelectorAll('.imagePrototype').forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            cursor: none;
          }

          .cursor {
            width: ${isHovering ? '80px' : '20px'}; 
            height: ${isHovering ? '80px' : '20px'}; 
            background-color: #10BFBF;
            border-radius: 50%;
            mix-blend-mode: difference;
            position: fixed;
            z-index: 9999;
            pointer-events: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out; 
          }

          .cursor-text {
            font-family: 'Manrope', sans-serif;
            font-size: ${isHovering ? '20px' : '12px'};
            color: #fff;
            text-align: center;
            white-space: nowrap;
            transition: font-size 0.2s ease-out;
          }

          @media only screen and (max-width: 767px) {
            body {
              cursor: auto; 
            }
            
            .cursor {
              display: none; 
            }
          }
        `}
      </style>
      <div ref={cursorRef} className="cursor" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
        {isHovering && <span className="cursor-text text-TextoMedianoPhone md:text-TextoGrande text-whiteBackground">View</span>}
      </div>
    </>
  );
};

export default Cursor;
