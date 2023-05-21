import Button from './Button.jsx';
import Modal from './Modal.jsx';

const Generator = ({ excuse, fetchRandomExcuse, status }) => {
  return (
    <article className='card'>
      <h1 className='fade-in'>Dev excuses</h1>
      {status === 'resolved' ? (
        <p className='text italic'>{excuse?.message}</p>
      ) : (
        <div className='skeleton skeleton-text'></div>
      )}
      <div className='btn-container slide-from-top'>
        <Button fetchRandomExcuse={fetchRandomExcuse} />
        <Modal />
      </div>
    </article>
  );
};
export default Generator;
