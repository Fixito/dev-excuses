import { Link } from 'react-router-dom';
import img from '../assets/page-not-found.svg';

const ErrorPage = () => {
  return (
    <main className='full-page grid-center'>
      <section>
        <img src={img} alt='' className='error-img' />
        <p className='text-center'>
          Perdu ? <Link to='/'>Retourner à l&apos;accueil</Link>
        </p>
      </section>
    </main>
  );
};

export default ErrorPage;
