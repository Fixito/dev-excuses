import { useEffect, useState } from 'react';
import Button from './Button.jsx';
import autoFetch from '../axios/custom.js';

const Generator = () => {
  const [message, setMessage] = useState('');

  const fetchRandomExcuse = async () => {
    try {
      const {
        data: { excuse }
      } = await autoFetch('/random');
      setMessage(excuse.message);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    fetchRandomExcuse();
  }, []);

  return (
    <article className='card'>
      <h1>Dev excuses</h1>
      <p className='text italic'>{message}</p>
      <Button fetchRandomExcuse={fetchRandomExcuse} />
    </article>
  );
};
export default Generator;
