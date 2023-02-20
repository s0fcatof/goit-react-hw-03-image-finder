import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=33753573-50d6a286f399da4f30a6e61d6&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

const useImages = ({ query, page = 1 }) => {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const images = await fetchImages(query, page);
        setImageList(images.hits);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  return { imageList, isLoading, error };
};

export default useImages;
