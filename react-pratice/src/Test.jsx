/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useRef, forwardRef } from 'react';

function Test() {
  return <MyForm />;
}

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

export default Test;
