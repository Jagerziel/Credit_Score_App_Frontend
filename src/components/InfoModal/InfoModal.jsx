// Import React
import React, { useEffect, useState } from 'react'
// Import Components
import InfoModalScreen from './InfoModalScreen.jsx'

export default function InfoModal( { score } ) {
    const [ open , setOpen ] = useState(false)

    useEffect(()=> {
        if (open === true) document.body.style.overflow = 'hidden'
        if (open === false) document.body.style.overflow = 'visible'
    }, [open])

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
