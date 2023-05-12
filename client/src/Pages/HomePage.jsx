import { useEffect, useState } from 'react';
import Generator from '../components/Generator.jsx';
import autoFetch from '../axios/custom.js';

const HomePage = () => {
  const [excuse, setExcuse] = useState({});
  const [status, setStatus] = useState('idle');

  const fetchRandomExcuse = async () => {
    const randomTime = Math.floor(Math.random() * 5 + 1) * 1000;
    setStatus('pending');

    try {
      const {
        data: { excuse }
      } = await autoFetch('/random');

      setExcuse(excuse);

      setTimeout(() => {
        setStatus('resolved');
      }, randomTime);
    } catch (error) {
      console.log(error);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    fetchRandomExcuse();
  }, []);

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
