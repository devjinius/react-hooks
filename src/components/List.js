import React, { useState } from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function List({ users }) {
  const userComponents = _ => users.map(user => <User user={user} key={user.id} />);
  return userComponents();
}

export default List;
