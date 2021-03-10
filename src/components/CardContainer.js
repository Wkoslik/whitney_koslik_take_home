//where cards get added
import React, { useState } from 'react'
import Cards from './Cards'

const CardContainer  = (props) => {
    let allCards = props.cardNumbers.map(num =>{
        return <Cards number={num} />
    })

    return (
        <div className="card-container">
            <h1>I will hold the cards</h1>
            {allCards}
        </div>
    )
}

export default CardContainer