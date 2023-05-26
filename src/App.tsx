import React from 'react';
import Header from './components/Header/Header';
import MainForm from './components/MainForm/MainForm';
import axios, { AxiosResponse } from 'axios';

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



interface MatrixInfo {
  name: string;
  sex: boolean;
  date: string;
  type: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<MatrixInfo[]> = await axios.get<MatrixInfo[]>('http://127.0.0.1:8000/');
    const data: MatrixInfo[] = response.data;

   
    data.forEach((item: MatrixInfo) => {
      const sex = item.sex ? 'Male' : 'Female';
      const type = item.type ? 'Base' : 'Exstend';
      console.log('Name:', item.name);
      console.log('Sex:', sex);
      console.log('Date:', item.date);
      console.log('Type:', type);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};


fetchData();
