import { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
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
            width: 20px; 
            height: 20px; 
            background-color: #10BFBF;
            border-radius: 50%;
            mix-blend-mode: difference;
            position: fixed;
            z-index: 9999;
            pointer-events: none;
            transition: transform 0.2s ease-out; 
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
      <div className="cursor" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
        
      </div>
    </>
  );
};

export default Cursor;

