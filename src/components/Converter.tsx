import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/valorant-logo.png';
import { useState } from 'react';

function Converter() {
  const [valoPoints, setValoPoints] = useState(1);
  const minPoints = 475;
  const [selectedCurrency, setSelectedCurrency] = useState('euros');
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (event) => {
    const value = Math.max(0, parseInt(event.target.value) || 0);
    setValoPoints(value);
  };

  function convert(valoPoints, currency) {
    let convertedValue;
    let rate;
    const minPoints = 475;

    if (currency === 'lei') {
      rate = 24.64 / minPoints;
    } else if (currency === 'dollars') {
      rate = 4.99 / minPoints;
    } else if (currency === 'euros') {
      rate = 4.99 / minPoints;
    }

    convertedValue = valoPoints * rate;
    return convertedValue.toFixed(2);
  }

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div
        className={`position-absolute top-0 start-50 translate-middle-x ${
          darkMode ? 'dark-mode' : ''
        }`}
      >
        <div className="text-center">
          <img src={logo} alt="valorant-logo" />
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
        </div>
        <h1>Value in {selectedCurrency}:{convert(valoPoints, selectedCurrency)}</h1>
      </div>
    </>
  );
}

export default Converter;
