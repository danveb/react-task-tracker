import React from 'react' 
import Button from './Button'

// destructure title from props 
const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className="Header">
            <h1>{title}</h1>
            {/* use Button Component; pass props */}
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> 
        </header>
    )
}

// defaultProps
Header.defaultProps = {
    title: 'Task Tracker' 
}

export default Header 