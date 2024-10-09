import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomJoke } from '../../redux/slices/quoteSlice';
import styles from './styles.module.scss';

const Quote = () => {
  const dispatch = useDispatch();
  const joke = useSelector(state => state.jokes.joke);
  const status = useSelector(state => state.jokes.status);
  const error = useSelector(state => state.jokes.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRandomJoke());
    }
  }, [status, dispatch]);

  const handleNewJoke = () => {
    dispatch(fetchRandomJoke());
  };

  return (
    <div className={styles.quoteContainer}>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>{joke}</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <button onClick={handleNewJoke} className={styles.newJokeButton}>
        Get a new joke
      </button>
    </div>
  );
};

export default Quote;