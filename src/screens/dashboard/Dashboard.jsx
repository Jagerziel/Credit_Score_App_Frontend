import React from 'react'
import './Dashboard.scss'
import PieNeedleChart from '../../components/PieNeedleChart/PieNeedleChart'

export default function Dashboard () {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-score-container'>
        <div className='dashboard-score-title'>Your Score</div>
        <div className='dashboard-score-result'>000</div>
      </div>
      <div className='dashboard-pie-needle-chart-container'>
        <PieNeedleChart />
      </div>
      <div>hello</div>
    </div>
  )
}