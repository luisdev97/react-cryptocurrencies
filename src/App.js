import React from 'react';
import imagen from './cryptomonedas.png';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={ imagen } alt="cryptoCurrency" className="logotipo"/>
        </div>
      </div>
    </div>
  );
};

export default App;