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
      <div className='btn-container slide-from-top'>
        <Button fetchRandomExcuse={fetchRandomExcuse} />
        <button className='btn btn-outline'>Add an excuse</button>
      </div>
    </article>
  );
};
export default Generator;
