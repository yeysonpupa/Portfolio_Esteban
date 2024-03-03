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
    // Agregar o eliminar la clase para bloquear el scroll
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }

    // Limpiar efecto secundario al desmontar el componente
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
      className={`p-4 md:p-8 flex justify-between items-center relative ${
        isMenuOpen ? 'bg-whiteBackground fixed top-0 left-0 right-0 bottom-0 z-50' : ''
      }`}
    >
      <div className="text-white md:text-xl text-TextoGrande font-bold">
        <Link to="/" className="text-2xl md:text-TextoGrande font-museomoderno cursor-none" onClick={closeMenu}>
          <span className="text-blackText font-light">{`{Esteban`}</span>
          <span className="text-primary font-light">.</span>
          <span className="text-blackText font-light">{`}`}</span>
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
