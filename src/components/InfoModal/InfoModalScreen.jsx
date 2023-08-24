import React from 'react'

import './InfoModalScreen.scss'

export default function InfoModalScreen( { open , setOpen , scoringDesc } ) {

  return (
    <div 
        className='infoModalScreen-container'
        style={{display: open ? "block" : "none" }}
    >
        <div className='infoModalScreen-subcontainer'>
            <div className='infoModalScreen-info-container'>
                <div className='infoModalScreen-info-title'>
                    {scoringDesc.title}
                </div>
                <div className='infoModalScreen-info-description'>
                    {scoringDesc.description}
                </div>
                <div 
                    className='infoModalScreen-info-button'
                    onClick={() => setOpen(false)}
                >
                    Close
                </div>

            </div>
        </div>
    </div>
  )
}
