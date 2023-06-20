import Button from './Button.jsx';
import Modal from './Modal.jsx';

const Generator = ({ excuse, fetchRandomExcuse, status }) => {
  return (
    <article className='card'>
      <h1 className='hide fade-in'>Dev excuses</h1>
      {status === 'resolved' ? (
        <p className='text italic'>{excuse?.message}</p>
      ) : (
        <div className='skeleton skeleton-text'></div>
      )}
      <div className='mask'>
        <div className='btn-container hide slide-down'>
          <Button fetchRandomExcuse={fetchRandomExcuse} />
          <Modal />
        </div>
      </div>
    </article>
  );
};
export default Generator;
