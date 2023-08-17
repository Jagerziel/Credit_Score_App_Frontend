// Import React
import React, { useState, useContext, useEffect } from 'react';
// Import Components
import PieNeedleChart from '../../components/PieNeedleChart/PieNeedleChart.jsx';
import DescLoggedIn from '../../components/Descriptions/DescLoggedIn.jsx';
import DescLoggedOut from '../../components/Descriptions/DescLoggedOut.jsx';
import InfoModal from '../../components/InfoModal/InfoModal.jsx';
// Import Data
import { userInputCategories, scoringUpperBound } from '../../data/data.js';
import { userInfo } from '../../App.js';
import { getInfo, createInfo } from '../../services/dbRequests.js';
// Import Firebase
import { login } from '../../services/firebase.js';
// Import CSS
import './Dashboard.scss';

export default function Dashboard() {
  const [userInput, setUserInput] = useState({
    item_0: 0, // Date of Birth
    item_1: 0, // # of Dependents
    item_2: 0, // Total Income
    item_3: 0, // Total Debt
    item_4: 0, // Total Accounts
    item_5: 0, // Revolving Utilization
    item_6: 0, // # of Real Estate Loans
    item_7: 0, // # of Times 30-59 Days Past Due
    item_8: 0, // # of Times 60-89 Days Past Due
    item_9: 0, // # of Times 90+ Days Past Due
  });

  const [score, setScore] = useState(500);

  const user = useContext(userInfo);
  let loggedIn = user ? false : true;
  // console.log(userInput);

  function calcScore(score, scoringUpperBound) {
    for (let i = 0; i < scoringUpperBound.length; i++) {
      if (score < scoringUpperBound[i][0]) {
        return scoringUpperBound[i][1];
      }
    }
  }
  // console.log(score);

  useEffect(() => {
    setUserInput({
      item_0: 0, // Date of Birth
      item_1: 0, // # of Dependents
      item_2: 0, // Total Income
      item_3: 0, // Total Debt
      item_4: 0, // Total Accounts
      item_5: 0, // Revolving Utilization
      item_6: 0, // # of Real Estate Loans
      item_7: 0, // # of Times 30-59 Days Past Due
      item_8: 0, // # of Times 60-89 Days Past Due
      item_9: 0, // # of Times 90+ Days Past Due
    });
    console.log(user);
    try {
      if (user !== null) {
        let data = getInfo(user);
        console.log(data);
      } else {
        throw new Error('User is null');
      }
    } catch (error) {
      console.log('user logged out');
    }
  }, [user]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-full-chart-container">
        <div className="dashboard-score-title">Your Score</div>
        <div className="dashboard-score-result">{score + 300}</div>
        <div className="dashboard-score-desc">
          <div style={{ padding: '0 5px 0 0' }}>
            {calcScore(score + 300, scoringUpperBound)}
          </div>
          <InfoModal score={score} />
        </div>
        <div className="dashboard-pie-needle-chart-container">
          <PieNeedleChart score={score} />
        </div>
        <div className="dashboard-bounds-container">
          <div>300</div>
          <div>850</div>
        </div>
      </div>
      <div
        className="dashboard-description-container-logout"
        style={{ display: user ? 'none' : 'block' }}
      >
        {userInputCategories.map((data, index) => {
          return (
            <div key={index}>
              <DescLoggedOut
                title={data.title}
                description={data.description}
              />
              <div style={{ padding: '17px 0 0 0' }}></div>
            </div>
          );
        })}
      </div>
      <div
        className="dashboard-description-container-logout"
        style={{ display: user ? 'block' : 'none' }}
      >
        {userInputCategories.map((data, index) => {
          return (
            <div key={index}>
              <DescLoggedIn
                title={data.title}
                description={data.description}
                userInput={userInput}
                setUserInput={setUserInput}
                index={index}
              />
              <div style={{ padding: '17px 0 0 0' }}></div>
            </div>
          );
        })}
      </div>
      {loggedIn ? (
        <div className="dashboard-login-button" onClick={() => login()}>
          Log In
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
