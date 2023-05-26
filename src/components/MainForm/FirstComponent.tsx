import { useState, ChangeEvent } from 'react';
import axios from 'axios';

const FirstComponent = () => {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [matrixType, setMatrixType] = useState('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSexChange = (selectedSex: string) => {
        setSex(selectedSex);
    };

    const handleBirthdateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBirthdate(event.target.value);
    };

    const handleMatrixTypeChange = (selectedMatrixType: string) => {
        setMatrixType(selectedMatrixType);
    };

    const handleCalculate = () => {
        const formData = {
            name: name,
            sex: sex === 'М' ? 1 : 0,
            date: birthdate,
            type: matrixType === 'Поглиблений' ? 1 : 0,
        };

        axios.post('http://127.0.0.1:8000/', formData)
            .then(response => {
                // Handle the API response
                console.log(response.data);
            })
            .catch(error => {
                // Handle any errors
                console.error('Error:', error);
            });
    };

    return (
        <form>
            <div>
                <input type="text" placeholder="Введіть Ім'я" value={name} onChange={handleNameChange} />
                <div>
                    <button type="button" onClick={() => handleSexChange('Ж')}>Ж</button>
                    <button type="button" onClick={() => handleSexChange('М')}>М</button>
                </div>
            </div>
            <input type="text" placeholder="Введіть дату народження" value={birthdate} onChange={handleBirthdateChange} />
            <button type="button" onClick={handleCalculate}>Розрахувати</button>
            <div>
                <button type="button" onClick={() => handleMatrixTypeChange('Стандарт')}>Стандарт</button>
                <button type="button" onClick={() => handleMatrixTypeChange('Поглиблений')}>Поглиблений</button>
            </div>
        </form>
    );
};

export default FirstComponent;
