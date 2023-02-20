import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  previewImageURL,
  onImageClick,
  imageId,
}) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={previewImageURL} alt="" onClick={() => onImageClick(imageId)} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  previewImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
  imageId: PropTypes.number.isRequired,
};
