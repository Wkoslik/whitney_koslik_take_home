//landing page --> where the content will render
import React, { useState } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import Instructions from './Instructions'
import Footer from './Footer'

const Landing = (props) => {
    const [cardNumbers, setCardNumbers] = useState([])

    const handleAddCard = (e) =>{
        e.preventDefault()
        //generate random number between 1 and 100
        let randomNum = Math.floor(Math.random()*101)
        setCardNumbers([...cardNumbers, randomNum])
    }


    const handleSortCards = () =>{
        setCardNumbers([...cardNumbers].sort((a,b) => a-b))
    }

    const handleDelete = (e) =>{
        e.preventDefault()
        let tempArr = [...cardNumbers]
        tempArr.splice(e.target.name, 1)
        setCardNumbers([...tempArr])
    }

    return (
        <div className="landing-page">
            <div className="landing-card">
                <Header handleAddCard={handleAddCard} handleSortCards={handleSortCards}/>
                <CardContainer cardNumbers={cardNumbers} handleDelete={handleDelete}/>
                <Footer />
            </div>
            <div className="landing-instructions">
                <Instructions />
            </div>
        </div>
    )
}

export default Landing