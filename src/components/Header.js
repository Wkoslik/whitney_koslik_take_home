//There is a fixed-height toolbar on teh top of the window that has buttons
import React from 'react'

const Header = (props) => {
    return (
        <header>
            <button className="btn" onClick={props.handleAddCard}>Add Card</button>
            <button className="btn" onClick={props.handleSortCards}>Sort Cards</button>
        </header>
    )
}

export default Header