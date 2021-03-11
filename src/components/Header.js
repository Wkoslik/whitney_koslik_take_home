//There is a fixed-height toolbar on teh top of the window that has buttons
import React from 'react'

const Header = (props) => {
    return (
        <div>
            <button onClick={props.handleAddCard}>Add Card</button>
            <button onClick={props.handleSortCards}>Sort Cards</button>
        </div>
    )
}

export default Header