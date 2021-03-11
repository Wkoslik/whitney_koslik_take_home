//landing page --> where the content will render
import React, { useState } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import Instructions from './Instructions'
import Footer from './Footer'

const Landing = () => {
    const [cardNumbers, setCardNumbers] = useState([])

    //adds a card to the card container
    const handleAddCard = () => {
        //generate random number between 1 and 100
        let randomNum = Math.floor(Math.random() * 101)
        //add random number to the end of the cardNumbers array
        setCardNumbers([...cardNumbers, randomNum])
    }

    //quick sort of cards from smallest to largest
    const handleSortCards = () => {
        setCardNumbers([...cardNumbers].sort((a, b) => a - b))
    }

    //deletes cards
    const handleDelete = (e) => {
        e.preventDefault()
        //create a temporary array
        let tempArr = [...cardNumbers]
        //remove the selected card from the temp array
        tempArr.splice(e.target.name, 1)
        //set the cardNumbers array equal to the temp array
        setCardNumbers([...tempArr])
    }

    return (
        <div className="landing-page">
            <div className="landing-card">
                <Header handleAddCard={handleAddCard} handleSortCards={handleSortCards} />
                <CardContainer cardNumbers={cardNumbers} handleDelete={handleDelete} />
                <Footer />
            </div>
            <div className="landing-instructions">
                <Instructions />
            </div>
        </div>
    )
}

export default Landing