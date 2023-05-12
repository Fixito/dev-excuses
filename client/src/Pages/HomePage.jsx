import { useCallback, useEffect, useState } from 'react';
import Generator from '../components/Generator.jsx';
import autoFetch from '../axios/custom.js';

const HomePage = () => {
  const [excuse, setExcuse] = useState({});
  const [status, setStatus] = useState('idle');
  const [id, setId] = useState(null);

  const fetchRandomExcuse = useCallback(async () => {
    const randomTime = Math.floor(Math.random() * 5 + 1) * 1000;
    setStatus('pending');

    try {
      let newExcuse = '';
      let http_code = '';

      do {
        const {
          data: { excuse }
        } = await autoFetch('/random');
        newExcuse = excuse;
        http_code = excuse.http_code;
      } while (id === http_code);

      setExcuse(newExcuse);
      setId(id);

      setTimeout(() => {
        setStatus('resolved');
      }, randomTime);
    } catch (error) {
      console.log(error);
      setStatus('rejected');
    }
  }, [id]);

  useEffect(() => {
    fetchRandomExcuse();
  }, [fetchRandomExcuse]);

  return (
    <main className='full-page grid-center'>
      <Generator
        excuse={excuse}
        fetchRandomExcuse={fetchRandomExcuse}
        status={status}
      />
    </main>
  );
};

export default HomePage;
