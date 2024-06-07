import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useSpring, animated, config } from 'react-spring';
import DataGallery from '../DataGallery';

const Photos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [maxImageHeight, setMaxImageHeight] = useState(0);
  const [columns, setColumns] = useState(2); // default to 2 columns

  useEffect(() => {
    const calculateMaxHeight = () => {
      const windowHeight = window.innerHeight;
      const maxHeight = windowHeight * 0.90;
      setMaxImageHeight(maxHeight);
    };

    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(4);
      } else if (window.innerWidth >= 768) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    calculateMaxHeight();
    updateColumns();

    window.addEventListener('resize', calculateMaxHeight);
    window.addEventListener('resize', updateColumns);

    return () => {
      window.removeEventListener('resize', calculateMaxHeight);
      window.removeEventListener('resize', updateColumns);
    };
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const modalAnimation = useSpring({
    opacity: modalIsOpen ? 1 : 0,
    from: { opacity: 0 },
    config: config.stiff,
  });

  const imageAnimation = useSpring({
    opacity: modalIsOpen ? 0.9 : 1,
    config: config.stiff,
  });

  const galleryChunks = chunkArray(DataGallery, columns);

  return (
    <div className="px-8 md:px-16 pt-0 bg-whiteBackground">
      <div className={`grid gap-4 grid-cols-2`}>
        {galleryChunks.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col">
            {row.map((item, columnIndex) => (
              <animated.img
                key={columnIndex}
                src={item.imageGallery}
                alt={item.title}
                className="navCur w-full h-auto mb-4 cursor-pointer"
                style={imageAnimation}
                onClick={() => openModal(item)}
              />
            ))}
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        ariaHideApp={false}
        className="absolute justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70"
      >
        {selectedImage && (
          <animated.div style={modalAnimation} className="text-right text-bold font-manrope text-TextoPequeñoPhone md:text-TextoNormal text-whiteBackground">
            <button onClick={closeModal} className="cursor-pointer mb-2">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <animated.img
              src={selectedImage.imageGallery}
              alt={selectedImage.title}
              className="w-full max-h-[90vh]"
              style={{ maxHeight: maxImageHeight + "px" }}
            />
          </animated.div>
        )}
      </Modal>
    </div>
  );
};

export default Photos;
