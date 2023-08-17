import React, { useState } from 'react'

export default function InfoModal( { score } ) {
    const [ open , setOpen ] = useState(false)

    function handleOpen () {

    }

    return (
        <img 
            className="infoModal-questionIcon" 
            src={require("./interrogation-mark.png")} 
            alt="abc" 
            height="17px"
            width="17px"
        />
    )
}
