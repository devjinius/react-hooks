import React, { useState } from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function List() {
  const users = [
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
  ];
  User;
  const userComponents = _ => users.map(user => <User user={user} key={user.id} />);
  return userComponents();
}

export default List;
