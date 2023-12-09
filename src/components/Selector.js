// Selector.js

import { useState } from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
  const [country, setCountry] = useState('');
  return (
    <div>
      <p>セレクター</p>
      <select>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
