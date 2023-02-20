import { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export const Searchbar = ({ onSearch }) => {
  const inputRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    onSearch(inputRef.current.value);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm}>
        <button type="submit" onClick={onSubmit}>
          <span>Search</span>
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
