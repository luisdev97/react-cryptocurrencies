import React from 'react';

const CryptoCurrency = ({ cryptoCurrency }) => {
    console.log(cryptoCurrency);
    const { FullName, Name } = cryptoCurrency.CoinInfo;
    return (
        <option value={ Name }> { FullName } </option>
    );
};

export default CryptoCurrency;