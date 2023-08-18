// Import React
import React, { useContext } from 'react'
// Import Data
import { userInfo } from '../../App.js';
// Import CSS
import './UserInput.scss'

export default function UserInput () {
    const user = useContext(userInfo);
    return (
        <div>UserInput</div>
    )
}