// Import React
import React, { useEffect, useState } from 'react'
// Import Components
import InfoModalScreen from './InfoModalScreen.jsx'
// Import Functions
import { calcScoreDesc } from '../../data/functions.js'
// Import Data
import { scoreDetails, scoringUpperBound } from '../../data/data.js'
// Import CSS
import './InfoModal.scss'


export default function InfoModal( { score , loggedIn } ) {
    const [ open , setOpen ] = useState(false)
    const [ scoringDesc , setScoringDesc ] = useState({})

    useEffect(() => {
        if (!loggedIn) {
            setScoringDesc(scoreDetails[calcScoreDesc(score , scoringUpperBound)])
        } else {
            setScoringDesc(scoreDetails['logout'])
        }
    }, [score , loggedIn])

    useEffect(()=> {
        if (open === true) document.body.style.overflow = 'hidden'
        if (open === false) document.body.style.overflow = 'visible'
    }, [open])

    return (
        <>
            <div className='infoModal-questionIcon-container'>
                <img 
                    className="infoModal-questionIcon" 
                    src={require("./interrogation-mark.png")} 
                    alt="?" 
                    height="17px"
                    width="17px"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <InfoModalScreen open={open} setOpen={setOpen} scoringDesc={scoringDesc} />
        </>
    )
}
