//where cards get added
import React, { useState } from 'react'
import Cards from './Cards'

const CardContainer  = (props) => {
    return (
        <div className="card-container">
            <h1>I will hold the cards</h1>
            <Cards />
        </div>
    )
}

export default CardContainer