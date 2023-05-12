import { useEffect, useState } from 'react';
import Generator from '../components/Generator.jsx';
import autoFetch from '../axios/custom.js';
import Loader from '../components/Loader.jsx';

const HomePage = () => {
  const [excuse, setExcuse] = useState(null);
  const [status, setStatus] = useState('idle');

  const fetchRandomExcuse = async (prevExcuse) => {
    const randomTime = Math.floor(Math.random() * 5 + 1) * 1000;
    setStatus('pending');

    try {
      let {
        data: { excuse: newExcuse }
      } = await autoFetch('/random');

      while (prevExcuse === newExcuse) {
        const { data } = await autoFetch('/random');
        newExcuse = data.excuse;
      }

      setExcuse(newExcuse);

      setTimeout(() => {
        setStatus('resolved');
      }, randomTime);
    } catch (error) {
      console.log(error.response.data.msg);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    fetchRandomExcuse(excuse);
  }, []);

  if (status === 'idle' || status === 'pending') {
    return (
      <main className='full-page grid-center'>
        <Loader />
      </main>
    );
  }

  if (status == 'rejected') {
    return (
      <main className='full-page grid-center'>
        <h1>Une erreur s&apos;est produite, veuillez réessayer plus tard...</h1>
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
