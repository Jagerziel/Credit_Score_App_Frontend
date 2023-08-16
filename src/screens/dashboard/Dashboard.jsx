import React from 'react'
import './Dashboard.scss'
import PieNeedleChart from '../../components/PieNeedleChart/PieNeedleChart'

export default function Dashboard () {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-pie-needle-chart-container'>
        <PieNeedleChart />
      </div>
      <div>hello</div>
    </div>
  )
}