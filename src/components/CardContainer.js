//where cards get added
import React from 'react'
import Cards from './Cards'

const CardContainer = (props) => {
    let allCards = props.cardNumbers.map((num, i) => {
        return <Cards number={num} key={i} index={i} handleDelete={props.handleDelete} />
    })

    return (
        <div className="card-container">
            {allCards}
        </div>
    )
}

export default CardContainer