import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCurrency from './CryptoCurrency';

const Form = () => {

    const [ cryptoCurrencies, setCryptoCurrencies ] = useState([]);
    
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

    return (
        <form>
            <div className="row">
                <label>Choose Badge</label>
                <select className="u-full-width">
                    <option value="">Choose badge</option>
                    <option value="USD">Dolar</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">Libra</option>
                </select>
            </div>

            <div className="row">
                <label>Choose Criptocurrency</label>
                <select className="u-full-width">
                    <option value="">Choose criptocurrency</option>
                    { renderCryptocurrencies(cryptoCurrencies) }

                </select>
            </div>
        </form>
    );
};

export default Form;