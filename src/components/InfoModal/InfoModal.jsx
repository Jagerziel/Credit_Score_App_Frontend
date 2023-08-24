// Import React
import React, { useState } from 'react'
// Import Components
import InfoModalScreen from './InfoModalScreen.jsx'

export default function InfoModal( { score } ) {
    const [ open , setOpen ] = useState(false)

    return (
        <>
            <img 
                className="infoModal-questionIcon" 
                src={require("./interrogation-mark.png")} 
                alt="?" 
                height="17px"
                width="17px"
                onClick={() => setOpen(!open)}
            />
            <InfoModalScreen open={open} setOpen={setOpen}/>
        </>
    )
}
