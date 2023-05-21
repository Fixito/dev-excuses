const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='form-fieldset'>
        {/* tag */}
        <label htmlFor='tag' className='form-label'>
          Tag:
        </label>
        <input name='tag' id='tag' className='form-input' />
      </fieldset>
      {/* excuse */}
      <fieldset className='form-fieldset'>
        <label htmlFor='message' className='form-label'>
          Excuse:
        </label>
        <textarea
          name='message'
          id='message'
          className='form-textarea'
        ></textarea>
      </fieldset>
      <button type='submit' className='btn'>
        Add
      </button>
    </form>
  );
};
export default Form;
