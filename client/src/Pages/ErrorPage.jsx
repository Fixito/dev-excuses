import { Link } from 'react-router-dom';
import img from '../assets/page-not-found.svg';

const ErrorPage = () => {
  return (
    <main className='container not-found-container'>
      <div>
        <img src={img} alt='' className='not-found-img' />
        <p>
          Perdu ? <Link to='/'>Retourner à l&apos;accueil</Link>
        </p>
      </div>
    </main>
  );
};

export default ErrorPage;
