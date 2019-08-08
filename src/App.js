import React, { useRef, useState } from 'react';
import Hello from './components/Hello';
import Counter from './components/Counter';
import Input from './components/Input';
import List from './components/List';
import CreateUser from './components/CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.ttt@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
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

  return (
    <div>
      <Hello />
      <Counter />
      <Input />
      <List users={users} onRemove={onRemove} />
      <CreateUser {...inputs} onChange={onChange} onCreate={onCreate} />
    </div>
  );
}

export default App;
