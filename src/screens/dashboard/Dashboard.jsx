// Import React
import React from 'react'
// Import Components
import PieNeedleChart from '../../components/PieNeedleChart/PieNeedleChart.jsx'
import DescLoggedIn from '../../components/Descriptions/DescLoggedIn.jsx'
import DescLoggedOut from '../../components/Descriptions/DescLoggedOut.jsx'
// Import Data
import { userInputCategories } from '../../data/data.js'
// Import CSS
import './Dashboard.scss'

export default function Dashboard () {
  
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
        <DescLoggedOut title={userInputCategories[0].title} description={userInputCategories[0].description}/>
      </div>
    </div>
  )
}