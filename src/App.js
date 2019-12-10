import React from 'react';
import imagen from './cryptomonedas.png';
import Form from './components/Form';

const App = () => {
  return (
    <div className="container">
      <div className="row">


        <div className="one-half column">
          <img src={ imagen } alt="cryptoCurrency" className="logotipo"/>
        </div>

        <div className="one-half column">
          <h1>Instantly cryptocurrency</h1>
          <Form/>
        </div>

      </div>
    </div>
  );
};

export default App;