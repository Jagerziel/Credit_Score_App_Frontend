import React from 'react'

import './InfoModalScreen.scss'

export default function InfoModalScreen( { open , setOpen } ) {

  return (
    <div 
        className='infoModalScreen-container'
        style={{display: open ? "block" : "none" }}
    >
        <div className='infoModalScreen-subcontainer'>
            <div className='infoModalScreen-info-container'>
                <div className='infoModalScreen-info-title'>
                    What your rating means to lenders
                </div>
                <div className='infoModalScreen-info-description'>
                Credit score ranges and what they mean will vary based on the score model used to calculate them, but they are generally similar to the following: 300-579 (Poor), 580-669 (Fair), 670-739 (Good), 740-799 (Very Good), and 800-850 (Excellent).
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
