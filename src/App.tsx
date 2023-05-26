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



function digitsIterative(nonneg: number): number[] {
  const digits: number[] = [];
  while (nonneg) {
    digits.push(nonneg % 10);
    nonneg = Math.floor(nonneg / 10);
  }
  return digits.reverse() || [0];
}


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
      const type = item.type ? 'Base' : 'Extend';

      console.log('Name:', item.name);
      console.log('Sex:', sex);
      console.log('Date:', item.date);
      console.log('Type:', type);

      
      
      const date = item.date;
      const a = parseInt(date.substring(0, 2));
      const b = date.length <= 8 ? parseInt(date.substring(2, 4)) : parseInt(date.substring(3, 5));
      const c = parseInt(date.substring(date.length <= 8 ? 4 : 6, date.length <= 8 ? 9 : 10));
      
      if (a <= 22) {
        console.log('a:', a);
      } else {
        const aInput = digitsIterative(a);
        const modifiedA = aInput[0] + aInput[1];
        console.log('a:', modifiedA);
      }
      
      console.log('b:', b);
      const iter_c = digitsIterative(c);
      const sum_c = iter_c.reduce((sum, digit) => sum + digit, 0);
      
      if (sum_c <= 22) {
        console.log('c:', sum_c);
      } else {
        const modifiedC = iter_c[0] + iter_c[1];
        console.log('c:', modifiedC);
      }
      const e = a + b + sum_c;

      if (e <= 22) {
        console.log('e:', e);
      } else {
        const eInput = digitsIterative(e);
        const modifiedE = eInput[0] + eInput[1];
        console.log('e:', modifiedE);
      }

      
    });
  } catch (error) {
    console.error('Error:', error);
  }
};


fetchData();
