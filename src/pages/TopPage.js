// TopPage.js

import Header from '../components/Header';
import Results from '../components/Results';
import Selector from '../components/Selector';
import Title from '../components/Title';

const TopPage = ({
  countriesJson,
  setCountry,
  getCountryData,
  countryData,
  loading,
}) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector
          countriesJson={countriesJson}
          setCountry={setCountry}
          getCountryData={getCountryData}
        />
        <Results countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};

export default TopPage;
