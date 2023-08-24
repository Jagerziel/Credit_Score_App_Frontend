import React from 'react'

import './InfoModalScreen.scss'

export default function InfoModalScreen( { open , setOpen } ) {

  return (
    <div 
        className='infoModalScreen-container'
        style={{display: open ? "block" : "none" }}
    >
        <div className='infoModalScreen-info-container'>
            InfoModalScreen
        </div>
    </div>
  )
}
