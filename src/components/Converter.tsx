import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/valorant-logo.png';
import { useState } from 'react';

function Converter() {
  const [valoPoints, setValoPoints] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState('euros');

  const handleInputChange = (event) => {
    const value = Math.max(0, parseInt(event.target.value) || 0);
    setValoPoints(value);
  };

  function convert(valoPoints:number, currency:string) {
    let convertedValue;
    let rate;

    if (currency === 'lei') {
      const minPoints=500;
      rate = 24.99 / minPoints;  
    } else if (currency === 'dollars') {
      const minPoints=475;
      rate = 4.99 / minPoints;
    }else if (currency === 'euros') {
      const minPoints=475;
      rate = 4.99 / minPoints;
    }

    convertedValue=valoPoints*rate;
    return convertedValue.toFixed(2);
  }

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <>
      <div className="position-absolute top-0 start-50 translate-middle-x">
        <div className="text-center">
          <img src={logo} alt="valorant-logo" />
          <h1>Valorant points:</h1>
          <input
            className="form-control"
            type="number"
            placeholder="Amount of valorant points"
            alt="Amount of valorant points"
            value={valoPoints}
            onChange={(e) => setValoPoints(e.target.value)}
            onInput={handleInputChange}
          />
          <h1>Convert to:</h1>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            <option value="euros">Euros</option>
            <option value="lei">Lei</option>
            <option value="dollars">Dollars</option>
          </select>
          <button type="button" className="btn btn-primary">
            Convert
          </button>
        </div>
        <h1>Value in {selectedCurrency}:{convert(valoPoints, selectedCurrency)}</h1>
      </div>
    </>
  );
}

export default Converter;