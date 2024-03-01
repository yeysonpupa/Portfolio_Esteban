import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const renderCircle = (id) => {
    return (
      <span
        className={`absolute inline-flex items-center justify-center w-6 h-6 rounded-full text-primary cursor-pointer ${
          hovered === id ? 'visible' : 'hidden'
        }`}
        style={{ top: '-10%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        •
      </span>
    );
  };

  return (
    <nav className="bg-whiteBackground p-4 md:p-8 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        <Link to="/" className="text-TextoGrande font-museomoderno">
          <span className="text-blackText font-light">{`{Esteban`}</span>
          <span className="text-primary font-light">.</span>
          <span className="text-blackText font-light">{`}`}</span>
        </Link>
      </div>
      <div className="flex space-x-12">
        <div className="relative inline-flex items-center">
          <Link
            to="/projects"
            className="text-TextoNormal font-manrope text-blackText"
            onMouseEnter={() => handleMouseEnter('projects')}
            onMouseLeave={handleMouseLeave}
          >
            {renderCircle('projects')}
            Projects
          </Link>
        </div>
        <div className="relative inline-flex items-center">
          <Link
            to="/about"
            className="text-TextoNormal font-manrope text-blackText"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            {renderCircle('about')}
            About
          </Link>
        </div>
        <div className="relative inline-flex items-center">
          <Link
            to="/snap"
            className="text-TextoNormal font-manrope text-blackText"
            onMouseEnter={() => handleMouseEnter('snap')}
            onMouseLeave={handleMouseLeave}
          >
            {renderCircle('snap')}
            Snap
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
