const Button = ({ fetchRandomExcuse }) => {
  return (
    <button type='button' className='btn' onClick={fetchRandomExcuse}>
      Get an excuse
    </button>
  );
};

export default Button;
