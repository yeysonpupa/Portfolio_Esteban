import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
    return () => {
      body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  const renderCircle = (id) => {
    return (
      <span
        className={`absolute inline-flex items-center justify-center w-6 h-6 rounded-full text-primary cursor-none ${
          hovered === id ? 'visible' : 'hidden'
        }`}
        style={{ top: '-10%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        •
      </span>
    );
  };

  return (
    <nav
      className={`pr-8 pl-8 pt-2 pb-2 md:pr-16 md:pl-16 md:pt-4 md:pb-4 flex justify-between items-center relative ${
        isMenuOpen ? 'bg-whiteBackground fixed top-0 left-0 right-0 bottom-0 z-50' : ''
      }`}
    >
      <div>
        <Link to="/" className="cursor-none" onClick={closeMenu}>
          <span className="text-TextoMedianoPhone md:text-TextoGrande text-blackText font-museomoderno font-light">{`{Esteban`}</span>
          <span className="text-TextoMedianoPhone md:text-TextoGrande text-primary font-museomoderno font-light">.</span>
          <span className="text-TextoMedianoPhone md:text-TextoGrande text-blackText font-museomoderno font-light">{`}`}</span>
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-blackText" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
      {isMenuOpen ? (
        <div
          className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-whiteBackground flex flex-col items-center justify-center overflow-hidden"
          style={{ paddingTop: '64px' }}
        >
          <Link
            to="/projects"
            className="text-TextoNormal font-manrope text-blackText mb-4 relative"
            onMouseEnter={() => handleMouseEnter('projects')}
            onMouseLeave={handleMouseLeave}
            onClick={closeMenu}
          >
            Projects
            {renderCircle('projects')}
          </Link>
          <Link
            to="/about"
            className="text-TextoNormal font-manrope text-blackText mb-4 relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
            onClick={closeMenu}
          >
            About
            {renderCircle('about')}
          </Link>
          <Link
            to="/snap"
            className="text-TextoNormal font-manrope text-blackText mb-4 relative"
            onMouseEnter={() => handleMouseEnter('snap')}
            onMouseLeave={handleMouseLeave}
            onClick={closeMenu}
          >
            Snap
            {renderCircle('snap')}
          </Link>
        </div>
      ) : (
        <div className="hidden md:flex space-x-12">
          <div className="relative inline-flex items-center">
            <Link
              to="/projects"
              className="text-TextoNormal font-manrope text-blackText cursor-none"
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
              className="text-TextoNormal font-manrope text-blackText cursor-none"
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
              className="text-TextoNormal font-manrope text-blackText cursor-none"
              onMouseEnter={() => handleMouseEnter('snap')}
              onMouseLeave={handleMouseLeave}
            >
              {renderCircle('snap')}
              Snap
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
