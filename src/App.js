import React, { useRef, useState, useMemo } from 'react';
import Hello from './components/Hello';
import Counter from './components/Counter';
import Input from './components/Input';
import List from './components/List';
import CreateUser from './components/CreateUser';

function countActiveUser(users) {
  console.log('!!!');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.ttt@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onChange = ({ target: { name, value } }) => {
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onCreate = () => {
    const newUser = { id: nextId.current, ...inputs };
    setUsers([...users, newUser]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => id !== user.id));
  };

  const onToggle = id => {
    setUsers(users.map(user => (user.id === id ? { ...user, active: !user.active } : user)));
  };

  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <div>
      {/* <Hello /> */}
      {/* <Counter /> */}
      {/* <Input /> */}
      <List users={users} onRemove={onRemove} onToggle={onToggle} />
      <CreateUser {...inputs} onChange={onChange} onCreate={onCreate} />
      <p>현재 활성화 계정 : {count}</p>
    </div>
  );
}

export default App;
