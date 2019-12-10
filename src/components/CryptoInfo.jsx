import React from 'react';

const CryptoInfo = ({ cryptoInfo }) => {
    if(Object.keys(cryptoInfo).length === 0 ) return null;
    
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR , LASTUPDATE } = cryptoInfo;
    return (
        <div className="resultado">
            <h2>Result</h2>
            <p className="precio">The price is <span>{ PRICE }</span></p>
            <p>Today's highest price <span>{ HIGHDAY }</span></p>
            <p>Today's lowest price <span>{ LOWDAY }</span></p>
            <p>Variation in the last 24 hours<span>{ CHANGEPCT24HOUR }</span></p>
            <p>Actual price <span>{ LOWDAY }</span></p>
        </div>
    );
}; 

export default CryptoInfo; 