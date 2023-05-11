import { useEffect, useState } from 'react';
import Generator from '../components/Generator.jsx';
import autoFetch from '../axios/custom.js';

const HomePage = () => {
  const [excuse, setExcuse] = useState(null);
  const [status, setStatus] = useState('idle');

  const fetchRandomExcuse = async () => {
    setStatus('pending');

    try {
      const {
        data: { excuse }
      } = await autoFetch('/random');
      setExcuse(excuse);
      setStatus('resolved');
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
        <div>Loading...</div>
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
