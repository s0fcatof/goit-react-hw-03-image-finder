import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export const Modal = ({ imageUrl, onOverlayClick }) => {
  return (
    <div className={styles.Overlay} onClick={onOverlayClick}>
      <div className={styles.Modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
};
