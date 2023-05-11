import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import autoFetch from '../axios/custom.js';
import Loader from '../components/Loader.jsx';

const HttpCodePage = () => {
  const [excuse, setExcuse] = useState(null);
  const [status, setStatus] = useState('idle');
  const { httpCode } = useParams();

  useEffect(() => {
    setStatus('pending');
    autoFetch(httpCode)
      .then(({ data: { excuse } }) => {
        setExcuse(excuse);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [httpCode]);

  if (status === 'idle' || status === 'pending') {
    return (
      <main className='full-page grid-center'>
        <Loader />
      </main>
    );
  }

  if (status === 'rejected') {
    return (
      <main>
        <h1 className='text-center'>No HTTP Code display</h1>
      </main>
    );
  }

  const { http_code, message } = excuse;

  return (
    <main className='full-page grid-center'>
      <article className='card'>
        <h1>HTTP Code</h1>
        <p className='text italic'>
          #{http_code}: {message}
        </p>
      </article>
    </main>
  );
};

export default HttpCodePage;
