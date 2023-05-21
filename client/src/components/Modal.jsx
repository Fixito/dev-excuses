import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';

const Modal = () => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    console.log('submitted');
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className='btn btn-outline'>Add an excuse</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='modal-overlay' />
        <Dialog.Content className='modal-content'>
          <Dialog.Title className='modal-title'>Add an excuse</Dialog.Title>
          <form onSubmit={handleSubmit}>
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
          <Dialog.Close asChild>
            <button className='close-btn' aria-label='Close'>
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
