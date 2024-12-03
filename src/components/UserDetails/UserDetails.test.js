import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserDetails from './UserDetails';

describe('UserDetails', () => {
  const user = {
    login: 'testuser',
    avatar_url: 'https://example.com/avatar.jpg',
    html_url: 'https://github.com/testuser',
  };

  it('renders user details correctly', () => {
    render(<UserDetails user={user} />);

    // Проверяем, что логин пользователя отображается корректно
    expect(screen.getByText(user.login)).toBeInTheDocument();

    // Проверяем, что аватар пользователя отображается корректно
    const avatarImage = screen.getByAltText(user.login);
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', user.avatar_url);

    // Проверяем, что ссылка на GitHub отображается корректно
    const githubLink = screen.getByText('Перейти на GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', user.html_url);
  });

  it('reloads the page when "Вернуться к поиску" button is clicked', () => {
    // Мокаем функцию window.location.reload
    const reloadMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    render(<UserDetails user={user} />);

    // Находим кнопку и кликаем по ней
    const reloadButton = screen.getByText('Вернуться к поиску');
    fireEvent.click(reloadButton);

    // Проверяем, что функция window.location.reload была вызвана
    expect(reloadMock).toHaveBeenCalled();
  });
});