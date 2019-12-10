import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Form from './components/Form';


const App = () => {

  const [ selectBadge, setSelectBadge ] = useState('');
  const [ selectCryptoCurrency, setSelectCryptoCurrency ] = useState('');
  
  const getCriptoCurrencyInfo = async() => {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${selectCryptoCurrency}&tsyms=${selectBadge}` 
    const res = await axios.get(url);
    console.log(res);    
  }

  useEffect(() => {
    getCriptoCurrencyInfo();
  },[selectCryptoCurrency]);

  return (
    <div className="container">
      <div className="row">


        <div className="one-half column">
          <img src={ imagen } alt="cryptoCurrency" className="logotipo"/>
        </div>

        <div className="one-half column">
          <h1>Instantly cryptocurrency</h1>
          <Form setSelectBadge={ setSelectBadge} setSelectCryptoCurrency={ setSelectCryptoCurrency } />
        </div>

      </div>
    </div>
  );
};

export default App;