// Import React
import React, { useState , useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// Import Components
import PieNeedleChart from '../../components/PieNeedleChart/PieNeedleChart.jsx'
import DescLoggedIn from '../../components/Descriptions/DescLoggedIn.jsx'
import DescLoggedOut from '../../components/Descriptions/DescLoggedOut.jsx'
import InfoModal from '../../components/InfoModal/InfoModal.jsx'
// Import Data
import { userInputCategories , scoringUpperBound , scoreCard , baseScore , scoreMapping } from '../../data/data.js'
import { userInfo } from '../../App.js'
import { calcScoreDesc } from '../../data/functions.js'
// Import Firebase
import { login } from '../../services/firebase.js';
// Import CSS
import './Dashboard.scss'

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

  function calcScore( scoreCard , baseScore , scoreMapping , userInput ) {
    let finalScore = baseScore
    let userInputLen = Object.keys(userInput).length
    console.log(userInput)

    loop_i: for (let i = 0; i < userInputLen; i++) {
      if (i === 2) { //Monthly Income
        console.log(`hit ${i}`)
        
        loop_j: for (let j = 0; j < scoreCard[scoreMapping[`item_${i}`]].length; j += 2) {
          // Set Value and check edge cases
          let inputVal = userInput[`item_${i}`]
          if (userInput[`item_2`] > 1000000000) inputVal = 1000000000 
          if (isNaN(userInput[`item_2`])) inputVal = 0
          // Loop through array by 2 to determine if less than stated threshold and add applicable score
          if (inputVal <= scoreCard[scoreMapping[`item_2`]][j]) {
            // console.log(`2) final score${finalScore}`)
            finalScore += scoreCard[scoreMapping[`item_2`]][j + 1]
            break loop_j
          }
        }
      } else if (i === 3) { // Monthly Debt
        // Adjust Debt Ratio
        let incomeVal = userInput[`item_2`]
        let debtVal = userInput['item_3']
        if (userInput[`item_2`] === 0 || isNaN(userInput[`item_2`])) incomeVal = 0
        if (userInput[`item_2`] > 1000000000) incomeVal = 1000000000
        if (userInput[`item_3`] === 0 || isNaN(userInput[`item_2`])) debtVal = 0
        if (userInput[`item_3`] > 1000000000) debtVal = 1000000000
        let debtRatio = incomeVal !== 0 ? debtVal / incomeVal : 0
        
        loop_j: for (let j = 0; j < scoreCard[`DebtRatio`].length; j += 2) {
          // Loop through array by 2 to determine if less than stated threshold and add applicable score
          if (debtRatio <= scoreCard[`DebtRatio`][j]) {
            // console.log(`${i}) final score${finalScore}`)
            finalScore += scoreCard[`DebtRatio`][j + 1]
            break loop_j
          }
        }
      } else if (i === 4) {
        continue
      } else {
        loop_j: for (let j = 0; j < scoreCard[scoreMapping[`item_${i}`]].length; j += 2) {
          // Set Value and check edge cases
          let inputVal = userInput[`item_${i}`]
          if (userInput[`item_${i}`] > 1000000000) inputVal = 1000000000 
          if (isNaN(userInput[`item_${i}`])) inputVal = 0
          // Loop through array by 2 to determine if less than stated threshold and add applicable score
          if (inputVal <= scoreCard[scoreMapping[`item_${i}`]][j]) {
            // console.log(`${i}) final score${finalScore}`)
            finalScore += scoreCard[scoreMapping[`item_${i}`]][j + 1]
            break loop_j
          }
        }
      }
    }
    // console.log(`final score total: ${finalScore}`)
    if (finalScore > 850) finalScore = 850
    if (finalScore < 300) finalScore = 300
    return finalScore
  }

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
  },[user])
  
  return (
    <div className='dashboard-container'>
      <div className='dashboard-return-home-container'>
        <NavLink className='dashboard-return-home' to={"/"}>Back</NavLink>
      </div>
      <div className='dashboard-full-chart-container'>
        <div className='dashboard-score-title'>Your Score</div>
        <div className='dashboard-score-result'>{score}</div>
        <div className='dashboard-score-desc'>
          <div style={{padding: "0 5px 0 0"}}>
            {
              calcScoreDesc(score, scoringUpperBound)
            }
          </div>
          <InfoModal score={ score }/>
        </div>
        <div className='dashboard-pie-needle-chart-container'>
          <PieNeedleChart score={score}/>
        </div>
        <div className='dashboard-bounds-container'>
          <div>300</div>
          <div>850</div>
        </div>
      </div>
      <div className='dashboard-description-container-logout' style={{display: user ? "none" : "block"}}>
        {
          userInputCategories.map((data, index) => {
            return (
              <div key={index}>
                <DescLoggedOut title={data.title} description={data.description}/>
                <div style={{padding: "17px 0 0 0"}}></div>
              </div>
            )
          })
        }
      </div>
      <div className='dashboard-description-container-logout' style={{display: user ? "block" : "none"}}>
        {
          userInputCategories.map((data, index) => {
            return (
              <div key={index}>
                <DescLoggedIn title={data.title} description={data.description} userInput={userInput} setUserInput={setUserInput} index={index}/>
                <div style={{padding: "17px 0 0 0"}}></div>
              </div>
            )
          })
        }
      </div>
      {loggedIn ? <div className='dashboard-login-button' onClick={() => login()}>Log In</div> : <></>}
    </div>
  )
}