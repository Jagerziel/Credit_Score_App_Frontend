import React from 'react';
import './DisplayTest.scss';

export default function DisplayTest({ tests }) {
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return tests.map((test) => (
      <div key={test._id} className="test-data">
        <div className="test-database">
          <h2>User {test.name}</h2>
          <h2>From DB</h2>
          {/* <p>Name: {test.name}</p> */}
          <p>Credit Score: {test.creditScore}</p>
          <p>Monthly Income: {test.monthlyIncome}</p>
          <p>Monthly Bills: {test.monthlyBills}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="display-test-container">{tests ? loaded() : loading()}</div>
  );
}
