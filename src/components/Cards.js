//individual cards
//Each card has a set pixel size, such as 300px by 250px, but you can decide what size you wish to use. Upon instantiation, a card should be given a random number between 0 and 100 and display it in the center of the card.
//Each card has a button in the top-right corner which can be used to delete the card.
import React from 'react'

const Cards = (props) => {
    return (
        <div>
            <h1>{props.number}</h1>
        </div>
    )
}

export default Cards