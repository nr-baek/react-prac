// import React, { useReducer } from 'react';
import useInputs from '../hooks/useInputs';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" onChange={onChange} value={state.name} />
        <input name="nickname" onChange={onChange} value={state.nickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
