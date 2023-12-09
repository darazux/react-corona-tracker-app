// Results.js

const Results = ({ countryData }) => {
  return (
    <div>
      <p>日付：{countryData.date.slice(0, 10)}</p>
      <p>新規感染者：{countryData.newConfirmed.toLocaleString()}</p>
      <p>感染者総数：{countryData.totalConfirmed.toLocaleString()}</p>
      <p>新規回復者：{countryData.newRecovered.toLocaleString()}</p>
      <p>回復者総数：{countryData.totalRecovered.toLocaleString()}</p>
    </div>
  );
};

export default Results;
