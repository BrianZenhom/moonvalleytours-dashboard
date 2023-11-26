'use client';
import { useState } from 'react';

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      <input type="checkbox" checked={checked} onChange={toggleChecked} />
    </>
  );
};
