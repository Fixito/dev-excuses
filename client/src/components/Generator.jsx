import { useState } from 'react';
import Button from './Button.jsx';

const Generator = () => {
  const [message, setMessage] = useState('The corresponding message');

  return (
    <>
      <h1>My awesome app</h1>
      <p>{message}</p>
      <Button />
    </>
  );
};
export default Generator;
