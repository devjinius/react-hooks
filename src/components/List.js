import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        onClick={() => onToggle(user.id)}
        style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }}
      >
        {user.username}
      </b>{' '}
      <span>({user.email})</span> <button onClick={() => onRemove(user.id)}>x</button>
    </div>
  );
}

function List({ users, onRemove, onToggle }) {
  const userComponents = _ =>
    users.map(user => <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />);

  return <>{userComponents()}</>;
}

export default List;
