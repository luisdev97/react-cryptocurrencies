import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCurrency from './CryptoCurrency';

const Form = () => {

    const [ cryptoCurrencies, setCryptoCurrencies ] = useState([]);
    const [ badget, setBadget ] = useState('');
    const [ cryptoCurrency, setCryptoCurrency ] = useState('');
    const [ error, setError ] = useState(false);
    
    const getApiInfo = async() => {
       const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
       const res = await axios.get(url);
       setCryptoCurrencies(res.data.Data);
    }

    const renderCryptocurrencies = cryptoCurrencies => {
        return cryptoCurrencies.map(cryptoCurrency => <CryptoCurrency key={ cryptoCurrency.CoinInfo.Id} cryptoCurrency={ cryptoCurrency }/> )
    }

    useEffect(() => {
        getApiInfo();
    },[]); 

    const handleSubmit = e => {
        e.preventDefault();

        if(cryptoCurrency === '' || badget === '')
            setError(true);
        else
            setError(false);
    }


    return (
        <form onSubmit={ handleSubmit }>
            <div className="row">
                <label>Choose Badge</label>
                <select className="u-full-width" onChange={ e => { setBadget(e.target.value)} }>
                    <option value="">Choose badge</option>
                    <option value="USD">Dolar</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">Libra</option>
                </select>
            </div>

            <div className="row">
                <label>Choose Criptocurrency</label>
                <select className="u-full-width" onChange={ e => { setCryptoCurrency(e.target.value)} }>
                    <option value="">Choose criptocurrency</option>
                    { renderCryptocurrencies(cryptoCurrencies) }

                </select>
            </div>

            <input type="submit" className="button-primary u-full-witdh" value="Calculate"/>
        </form>
    );
};

export default Form;