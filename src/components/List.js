import React, { useState } from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>{' '}
      <button onClick={() => onRemove(user.id)}>x</button>
    </div>
  );
}

function List({ users, onRemove }) {
  const userComponents = _ =>
    users.map(user => <User user={user} key={user.id} onRemove={onRemove} />);
  return userComponents();
}

export default List;
