import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/valorant-logo.png';

function Converter() {
  return (
    <>
      <div className="position-absolute top-0 start-50 translate-middle-x">
        <div className='text-center'>
          <img src={logo} alt='valorant-logo' />
          <input className="form-control" type="number" placeholder='Amount of valorant points'/>
          <h1>Convert to:</h1>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Euros</option>
  <option value="Lei">Lei</option>
  <option value="Dollars">Dollars</option>
</select>
          <button type="button" className="btn btn-primary">Convert</button>
        </div>
      </div>
    </>
  );
}

export default Converter;
