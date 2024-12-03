import React from 'react';
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className='block'>
      <div className='user-block'>
        <h2>{user.login}</h2>
        <img src={user.avatar_url} alt={user.login} width="280" />
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          Перейти на GitHub
        </a>
        <button className='button' type="submit" onClick={handleReload}>
          Вернуться к поиску
        </button>
      </div>
    </div>
  );
};

export default UserDetails;