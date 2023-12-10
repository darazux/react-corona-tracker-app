// App.js

import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import countriesJson from './countries.json';
import TopPage from './pages/TopPage';
import './App.css';
import WorldPage from './pages/WorldPage';

function App() {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  });
  const getCountryData = () => {
    fetch(
      `https://proxy-server-node.vercel.app/corona-tracker-country-data?${country}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed:
            data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered:
            data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered,
        });
      });
  };

  const [allCountriesData, setAllCountriesData] = useState([]);
  useEffect(() => {
    fetch('https://proxy-server-node.vercel.app/corona-tracker-world-data')
      .then((res) => res.json())
      .then((data) => {
        setAllCountriesData(data.Countries);
      })
      .catch((err) =>
        alert(
          'エラーが発生しました。ページをリロードして、もう一度トライしてください。',
        ),
      );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TopPage
              countriesJson={countriesJson}
              setCountry={setCountry}
              getCountryData={getCountryData}
              countryData={countryData}
            />
          }
        />
        <Route
          path="/world"
          element={<WorldPage allCountriesData={allCountriesData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
