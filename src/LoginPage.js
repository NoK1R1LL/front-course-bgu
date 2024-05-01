import React, { useState } from 'react';
import './Login.css';

function LoginPage({ onLogin }) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerMode, setRegisterMode] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (registerMode) {

      if (!username || !password) {
        alert('Пожалуйста, введите имя пользователя и пароль.');
        return;
      }

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      setRegisterMode(false);
      setLoginData({ username: '', password: '' });
    } else {

      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (username === savedUsername && password === savedPassword) {
        onLogin();
      } else {
        alert('Неверное имя пользователя или пароль.');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleToggleMode = () => {
    setRegisterMode(!registerMode);
  };

  return (
    <main>
      <form id="loginForm" onSubmit={handleSubmit}>
        <h2>{registerMode ? 'Регистрация' : 'Вход'}</h2>
        <label htmlFor="username">Имя пользователя:</label>
        <input type="text" id="username" name="username" value={loginData.username} onChange={handleChange} required /><br />
        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required /><br /><br />
        <button type="submit">{registerMode ? 'Зарегистрироваться' : 'Войти'}</button>
        <p>
          {registerMode ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}{' '}
          <span className="toggle-link" onClick={handleToggleMode}>
            <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>
              {registerMode ? 'Войти' : 'Зарегистрироваться'}
            </a>
          </span>
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
