import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';
import Form from './Form.jsx';
import autoFetch from '../axios/custom.js';
import { toast } from 'react-toastify';

const Modal = () => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { tag, message } = e.target.elements;

    if (!tag.value || !message.value) {
      toast.error('Please provide values.');
      return;
    }

    try {
      await autoFetch.post('/', {
        tag: tag.value,
        message: message.value
      });
      toast.success('Excuse added.');
    } catch (err) {
      console.log(err);
    }

    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className='btn btn-outline'>Add an excuse</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='modal-overlay' />
        <Dialog.Content className='modal-content'>
          <Dialog.Title className='modal-title'>Add an excuse</Dialog.Title>
          <Form handleSubmit={handleSubmit} />
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
