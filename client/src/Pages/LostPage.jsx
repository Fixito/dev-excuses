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
    <main className='lost-container'>
      <div>
        <iframe
          src='https://giphy.com/embed/6uGhT1O4sxpi8'
          className='gif'
        ></iframe>
        <h1>I&apos;m lost</h1>
      </div>
    </main>
  );
};

export default LostPage;
