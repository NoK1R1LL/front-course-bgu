import React, { useState } from 'react';
import './App.css';
import ContactForm from './ContactForm';
import LoginPage from './LoginPage';
import CatPage from './CatPage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setCurrentPage('cat');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Web App</h1>
        {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
        {currentPage === 'cat' && <CatPage />}
      </header>
    </div>
  );
}

export default App;
