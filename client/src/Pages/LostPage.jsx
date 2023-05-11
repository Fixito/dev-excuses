import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LostPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);

  return (
    <main className='full-page grid-center'>
      <section>
        <iframe
          src='https://giphy.com/embed/6uGhT1O4sxpi8'
          className='gif'
        ></iframe>
        <h1 className='text-center'>I&apos;m lost</h1>
      </section>
    </main>
  );
};

export default LostPage;
