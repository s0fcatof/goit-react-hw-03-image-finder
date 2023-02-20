import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageList }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [imageIdToShowOnModal, setImageIdToShowOnModal] = useState(null);

  const closeModal = () => {
    setIsModalOpened(false);
    setImageIdToShowOnModal(null);
  };

  const escFunction = useCallback(event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const onImageClick = imageId => {
    setIsModalOpened(true);
    setImageIdToShowOnModal(imageId);
  };

  return (
    <>
      <ul className={styles.ImageGallery}>
        {imageList.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageId={image.id}
            previewImageURL={image.webformatURL}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
      {isModalOpened ? (
        <Modal
          imageUrl={
            imageList.find(x => x.id === imageIdToShowOnModal).largeImageURL
          }
          onOverlayClick={closeModal}
        />
      ) : null}
    </>
  );
};

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
