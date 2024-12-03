import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should call onSearch with the correct term when form is submitted', () => {
    // Создаем mock-функцию для onSearch
    const onSearchMock = jest.fn();

    // Рендерим компонент SearchBar с mock-функцией
    render(<SearchBar onSearch={onSearchMock} />);

    // Находим элементы на странице
    const input = screen.getByPlaceholderText('Поиск по имени...');
    const button = screen.getByRole('button', { name: 'Поиск' });

    // Вводим текст в input
    fireEvent.change(input, { target: { value: 'John Doe' } });

    // Отправляем форму
    fireEvent.click(button);

    // Проверяем, что onSearch была вызвана с правильным аргументом
    expect(onSearchMock).toHaveBeenCalledWith('John Doe');
  });

  it('should update the input value when user types', () => {
    // Рендерим компонент SearchBar
    render(<SearchBar onSearch={() => {}} />);

    // Находим input
    const input = screen.getByPlaceholderText('Поиск по имени...');

    // Вводим текст в input
    fireEvent.change(input, { target: { value: 'Jane Doe' } });

    // Проверяем, что значение input изменилось
    expect(input.value).toBe('Jane Doe');
  });
});