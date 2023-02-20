import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
