// WorldPage.js

import Card from '../components/Card';
import Header from '../components/Header';
import Title from '../components/Title';

const WorldPage = ({ allCountriesData }) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
};

export default WorldPage;
