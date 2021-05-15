import React, { useCallback, useState } from 'react';
import { Dialog } from '../../components/Dialog';
import Button from '../../components/Button';

export default {
  title: 'Example/Dialog',
  component: Dialog
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prevValue) => !prevValue);
  }, []);

  return (
    <>
      <Button onClick={toggle}>Show Dialog</Button>
      <Dialog isOpen={isOpen} onDismiss={toggle}>
        <p>Some Content</p>
      </Dialog>
    </>
  );
};
