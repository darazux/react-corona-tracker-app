// Results.js

const Results = ({ countryData }) => {
  return (
    <div className="results-container">
      <div>
        <p>日付：{countryData.date.slice(0, 10)}</p>
        <p>
          新規感染者：<span>{countryData.newConfirmed.toLocaleString()}</span>
        </p>
        <p>
          感染者総数：<span>{countryData.totalConfirmed.toLocaleString()}</span>
        </p>
        <p>
          新規回復者：<span>{countryData.newRecovered.toLocaleString()}</span>
        </p>
        <p>
          回復者総数：<span>{countryData.totalRecovered.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
};

export default Results;
