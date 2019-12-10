import React,{ useState, useEffect } from 'react';
import axios from 'axios';
const Form = () => {

    const [ cryptocurrencias, setCryptocurrencies ] = useState([]);
    
    const getApiInfo = async() => {
       const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
       const res = await axios.get(url);
        setCryptocurrencies(res.data.Data);
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

                </select>
            </div>
        </form>
    );
};

export default Form;