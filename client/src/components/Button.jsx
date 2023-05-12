const Button = ({ fetchRandomExcuse }) => {
  return (
    <button
      type='button'
      className='btn slide-to-left'
      onClick={fetchRandomExcuse}
    >
      Get an excuse
    </button>
  );
};

export default Button;
