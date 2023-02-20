import { useEffect, useState } from 'react';
import styles from './App.module.css';
import useImages from 'api/useImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [renderedImageList, setRenderedImageList] = useState([]);
  const { imageList, isLoading, error } = useImages({ query, page });

  useEffect(() => {
    if (page === 1) {
      setRenderedImageList(imageList);
    } else if (page > 1) {
      setRenderedImageList(prevList => [...prevList, ...imageList]);
    }
  }, [imageList]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

  const onSearch = query => {
    setPage(1);
    setQuery(query);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSearch={onSearch} />
      {error ? <p>{error.message}</p> : null}
      {imageList && imageList.length ? (
        <ImageGallery imageList={renderedImageList} />
      ) : null}
      {imageList && imageList.length && !isLoading ? (
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        />
      ) : null}
      {isLoading ? <Loader /> : null}
    </div>
  );
};
