// TopPage.js

import Results from '../components/Results';
import Selector from '../components/Selector';
import Title from '../components/Title';

const TopPage = ({
  countriesJson,
  setCountry,
  getCountryData,
  countryData,
}) => {
  return (
    <div>
      <Title />
      <Selector
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
      />
      <Results countryData={countryData} />
    </div>
  );
};

export default TopPage;
