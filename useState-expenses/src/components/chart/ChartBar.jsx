import React from 'react'
import './ChartBar.css'

function ChartBar(props) {
let barFillHeight = '0'

if(props.totalMax > 0){
    barFillHeight = Math.round((props.value / props.totalMax) * 100) + '%'
}
  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style= {{height: barFillHeight}}/>
        </div>
        <label className='chart-bar__label'>{props.label}</label>
    </div>
  )
}

export default ChartBar