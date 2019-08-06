import React, { useState, useRef } from 'react';

function Input() {
  const [input, setInput] = useState({
    name: '',
    nickname: ''
  });

  const nameInput = useRef();
  const { name, nickname } = input;

  const changeHandler = ({ target: { name, value } }) => {
    setInput({ ...input, [name]: value });
  };

  const resetInput = () => {
    setInput({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <>
      <input placeholder="이름" name="name" onChange={changeHandler} value={name} ref={nameInput} />
      <input placeholder="닉네임" name="nickname" onChange={changeHandler} value={nickname} />
      <button onClick={resetInput}>초기화</button>
      <div>
        <b>값</b>
        {`${name} (${nickname})`}
      </div>
    </>
  );
}

export default Input;
