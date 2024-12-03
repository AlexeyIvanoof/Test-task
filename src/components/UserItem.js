import React from 'react';

const UserItem = ({ user, onClick }) => {
  console.log(user)
  return (
    <li onClick={onClick}>
      <img src={user.avatar_url} alt={user.login} width="70" />
      <span>{user.login}</span>
      <span>Repos: {user.public_repos}</span>
    </li>
  );
};

export default UserItem;