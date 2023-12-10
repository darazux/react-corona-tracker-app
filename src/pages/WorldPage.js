// WorldPage.js

import Card from '../components/Card';

const WorldPage = ({ allCountriesData }) => {
  return (
    <div>
      <Card allCountriesData={allCountriesData} />
    </div>
  );
};

export default WorldPage;
