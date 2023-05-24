import React from 'react';
import Header from './components/Header/Header';
import MainForm from './components/MainForm/MainForm';

import './App.css';

// import logo from './img/logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header links={['Сумісність в парі', 'Дитяча', 'Тарифи', 'Відгуки', 'Блог']}/>
      <MainForm />
    </div>
  );
}

export default App;
