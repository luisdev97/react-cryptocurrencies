import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Form from './components/Form';
import CryptoInfo from './components/CryptoInfo';
import Spinner from './components/Spinner';


const App = () => {

  const [ selectBadge, setSelectBadge ] = useState('');
  const [ selectCryptoCurrency, setSelectCryptoCurrency ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ cryptoInfo, setCryptoInfo ] = useState({});

  const getCriptoCurrencyInfo = async() => {
    if(selectBadge === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectCryptoCurrency}&tsyms=${selectBadge}` 
      const res = await axios.get(url);
      const data = res.data.DISPLAY[selectCryptoCurrency][selectBadge];
      setLoading(true); 

      setTimeout(() => {
        setCryptoInfo(data);
        setLoading(false);
      },3000);
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
          { loading ? <Spinner/> : <CryptoInfo cryptoInfo={ cryptoInfo }/> }
        </div>

      </div>
    </div>
  );
};

export default App;