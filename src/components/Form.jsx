import React from 'react';

const Form = () => {
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