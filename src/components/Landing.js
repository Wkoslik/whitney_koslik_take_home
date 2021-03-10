//landing page --> where the content will render
import React, { useState } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import Instructions from './Instructions'
import Footer from './Footer'

const Landing = (props) => {
    const [cardNumbers, setCardNumber] = useState([])

    const handleAddCard = (e) =>{
        e.preventDefault()
        //generate random number between 1 and 100
        let randomNum = Math.floor(Math.random()*101)
        setCardNumber([...cardNumbers, randomNum])
        console.log('🔥', randomNum)
        console.log('⭐️', cardNumbers)
    }

    const handSortCards = () =>{

    }

    return (
        <div className="landing-page">
            <div className="landing-card">
                <Header handleAddCard={handleAddCard}/>
                <CardContainer cardNumbers={cardNumbers}/>
                <Footer />
            </div>
            <div className="landing-instructions">
                <Instructions />
            </div>
        </div>
    )
}

export default Landing