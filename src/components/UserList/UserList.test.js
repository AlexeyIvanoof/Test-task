import React from 'react';
import { render, screen} from '@testing-library/react';
import UserList from './UserList';

const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];
  
  const onUserClick = jest.fn();
  
  it('renders a list of users', () => {
    render(<UserList users={users} onUserClick={onUserClick} />);
  
    // Проверяем, что все пользователи отображаются
    users.forEach((user) => {
      expect(screen.getByTestId(`user-item-${user.id}`)).toBeInTheDocument();
    });
  });
  
 