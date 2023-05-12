import Button from './Button.jsx';
import Loader from './Loader.jsx';

const Generator = ({ excuse, fetchRandomExcuse, status }) => {
  return (
    <article className='card'>
      <h1 className='fade-in'>Dev excuses</h1>
      {status === 'resolved' ? (
        <p className='text italic'>{excuse?.message}</p>
      ) : (
        <Loader />
      )}
      <Button fetchRandomExcuse={fetchRandomExcuse} />
    </article>
  );
};
export default Generator;
