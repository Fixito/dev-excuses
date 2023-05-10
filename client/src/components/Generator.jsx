import { useState } from 'react';
import Button from './Button.jsx';

const Generator = () => {
  const [message, setMessage] = useState('The corresponding message');

  return (
    <div className='form'>
      <h1>My awesome app</h1>
      <p className='text'>{message}</p>
      <Button />
    </div>
  );
};
export default Generator;
