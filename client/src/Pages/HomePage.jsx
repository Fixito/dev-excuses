import { useEffect, useState } from 'react';
import Generator from '../components/Generator.jsx';
import autoFetch from '../axios/custom.js';
import Loader from '../components/Loader.jsx';

const HomePage = () => {
  const [excuse, setExcuse] = useState(null);
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
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    fetchRandomExcuse();
  }, []);

  if (status === 'idle' || status === 'pending') {
    return (
      <main className='full-page grid-center'>
        <Loader />
      </main>
    );
  }

  return (
    <main className='full-page grid-center'>
      <Generator excuse={excuse} fetchRandomExcuse={fetchRandomExcuse} />
    </main>
  );
};

export default HomePage;
