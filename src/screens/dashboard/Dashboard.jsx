// Import React
import React, { useState , useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// Import Components
import PieNeedleChart from '../../components/PieNeedleChart/PieNeedleChart.jsx';
import DescLoggedIn from '../../components/Descriptions/DescLoggedIn.jsx';
import DescLoggedOut from '../../components/Descriptions/DescLoggedOut.jsx';
import InfoModal from '../../components/InfoModal/InfoModal.jsx';
// Import Data
import { userInputCategories , scoringUpperBound , backendMapping , scoreCard , baseScore , scoreMapping } from '../../data/data.js'
import { userInfo } from '../../App.js'
import { calcScoreDesc , calcScore } from '../../data/functions.js'
import { getInfo, createInfo, updateInfo } from '../../services/dbRequests.js';
// Import Firebase
import { login } from '../../services/firebase.js';
// Import Animation
import PageTransitionFade from '../../hooks/PageTransition/PageTransitionFade.jsx';
import CategoryTransitionFade from '../../hooks/PageTransition/CategoryTransitionFade.jsx'
// Import CSS
import './Dashboard.scss';

export default function Dashboard () {
  const [ userInput , setUserInput ] = useState({
    item_0: 0,  // Age
    item_1: 0,  // # of Dependents
    item_2: 0,  // Total Income
    item_3: 0,  // Total Debt
    item_4: 0,  // Total Accounts
    item_5: 0,  // Revolving Utilization
    item_6: 0,  // # of Real Estate Loans
    item_7: 0,  // # of Times 30-59 Days Past Due
    item_8: 0,  // # of Times 60-89 Days Past Due
    item_9: 0   // # of Times 90+ Days Past Due
  })
  // console.log(userInput)
  const [ score , setScore ] = useState(500)
  
  const user = useContext(userInfo);

  let loggedIn = user ? false : true

  useEffect(() => {
    setScore(calcScore( scoreCard , baseScore , scoreMapping , userInput ))
  }, [userInput])

  useEffect(() => {
    setUserInput({
      item_0: 0,  // Age
      item_1: 0,  // # of Dependents
      item_2: 0,  // Total Income
      item_3: 0,  // Total Debt
      item_4: 0,  // Total Accounts
      item_5: 0,  // Revolving Utilization
      item_6: 0,  // # of Real Estate Loans
      item_7: 0,  // # of Times 30-59 Days Past Due
      item_8: 0,  // # of Times 60-89 Days Past Due
      item_9: 0   // # of Times 90+ Days Past Due
    })
    // console.log(user);
    // console.log(userInput);
    try {
      if (user !== null) {
        let data = getInfo(user);
        // console.log(data);
      } else {
        throw new Error('User is null');
      }
    } catch (error) {
      console.log('user logged out');
    }
  }, [user]);

  useEffect(() => {
    try {
      if (user !== null) {
        let dataReformatted = {};
        let backendMappingKeys = Object.values(backendMapping);

        for (let i = 0; i < backendMappingKeys.length; i++) {
          dataReformatted = {
            ...dataReformatted,
            [backendMappingKeys[i]]: userInput[`item_${i}`],
          };
        }

        dataReformatted = { ...dataReformatted, Score: score, uid: user.uid };

        // Check if user data already exists
        // Fetch user info check
        fetch(`http://localhost:4000/info/${user.uid}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.exists) {
              updateInfo(user, dataReformatted);
              // User data exists, handle accordingly
            } else {
              // User data doesn't exist, handle accordingly
              createInfo(user, dataReformatted);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        throw new Error('User is null');
      }
    } catch (error) {
      console.log('user logged out');
    }
    // }
  }, [score]);
  
  return (
    <PageTransitionFade>
      <div className="dashboard-container">
        <div className='dashboard-return-home-container'>
          <NavLink className='dashboard-return-home' to={"/"}>Back</NavLink>
        </div>
        <div className="dashboard-full-chart-container">
          <div className="dashboard-score-title">Your Score</div>
          <div className="dashboard-score-result">{score}</div>
          <div className="dashboard-score-desc">
            <div style={{ padding: '0 5px 0 0' }}>
              {calcScoreDesc(score, scoringUpperBound)}
            </div>
            <InfoModal score={score} loggedIn={loggedIn}/>
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
              <CategoryTransitionFade index={index} delayModifier={index}>
                <div key={index}>
                  <DescLoggedOut
                    title={data.title}
                    description={data.description}
                  />
                  <div style={{ padding: '17px 0 0 0' }}></div>
                </div>
              </CategoryTransitionFade>
            );
          })}
        </div>
        <div
          className="dashboard-description-container-logout"
          style={{ display: user ? 'block' : 'none' }}
        >
          {userInputCategories.map((data, index) => {
            return (
              <CategoryTransitionFade index={index} delayModifier={index}>
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
              </CategoryTransitionFade>
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
    </PageTransitionFade>
  );
}
