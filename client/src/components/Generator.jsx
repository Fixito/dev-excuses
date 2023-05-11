import Button from './Button.jsx';

const Generator = ({ excuse, fetchRandomExcuse }) => {
  return (
    <article className='card'>
      <h1>Dev excuses</h1>
      <p className='text italic'>{excuse?.message}</p>
      <Button fetchRandomExcuse={fetchRandomExcuse} />
    </article>
  );
};
export default Generator;
