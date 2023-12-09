// Selector.js

import { useState } from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
  const [country, setCountry] = useState('');
  const getCountryData = () => {
    fetch(
      `https://proxy-server-node.vercel.app/corona-tracker-country-data?${country}`,
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <p>セレクター</p>
      <select onChange={(e) => setCountry(e.target.value)}>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </div>
  );
};

export default Selector;
