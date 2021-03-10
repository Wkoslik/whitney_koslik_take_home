//There is a fixed-height toolbar on teh top of the window that has buttons
import React, { useState } from 'react'

const Header = (props) => {
    return (
        <div>
            <button onClick={props.handleAddCard}>Add Card</button>
            <button>Sort Cards</button>
        </div>
    )
}

export default Header