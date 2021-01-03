import { useMemo, useState } from 'react';

const sum = (persons) => {
  console.log('...sum');
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
};

const Example9 = () => {
  const [value, setValue] = useState('');
  const [persons, setPersons] = useState([
    { name: 'Mark', age: 38 },
    { name: 'Nara', age: 29 },
  ]);

  function change(e) {
    setValue(e.target.value);
  }

  // const count = sum(persons); // persons가 변했을때만 다시 계산한다.

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]); // persons가 변하지 않았을 때는 기억한다.
  // 첫 번쨰 인자인 함수의 연산 결과물을 기억해놓는다.
  // persons값이 변경되지 않으면 연산의 결과는 언제나 같기 때문에 다시 연산할 필요가 없으니
  // deps에 [persons]를 줘서 persons가 변경되지 않으면 다시 연산하지 않도록 알려줌.

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
    </div>
  );
};

export default Example9;
