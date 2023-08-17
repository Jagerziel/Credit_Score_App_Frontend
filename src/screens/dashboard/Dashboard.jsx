// Import React
import React, { useContext } from 'react'
// Import Components
import PieNeedleChart from '../../components/PieNeedleChart/PieNeedleChart.jsx'
import DescLoggedIn from '../../components/Descriptions/DescLoggedIn.jsx'
import DescLoggedOut from '../../components/Descriptions/DescLoggedOut.jsx'
// Import Data
import { userInputCategories } from '../../data/data.js'
import { userInfo } from '../../App.js'
// Import Firebase
import { login } from '../../services/firebase.js';
// Import CSS
import './Dashboard.scss'

export default function Dashboard () {
  const user = useContext(userInfo);
  let loggedIn = user ? false : true
  
  return (
    <div className='dashboard-container'>
      <div className='dashboard-full-chart-container'>
        <div className='dashboard-score-title'>Your Score</div>
        <div className='dashboard-score-result'>000</div>
        <div className='dashboard-pie-needle-chart-container'>
          <PieNeedleChart />
        </div>
        <div className='dashboard-bounds-container'>
          <div>300</div>
          <div>850</div>
        </div>
      </div>
      <div className='dashboard-description-container'>
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
      {loggedIn ? <div className='dashboard-login-button' onClick={() => login()}>Log In</div> : <></>}
    </div>
  )
}