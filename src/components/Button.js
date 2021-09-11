import React from 'react' 

// destructure color, text, onClick from props passed down from Header Component
const Button = ({color, text, onClick }) => {

    return (
        <button onClick={onClick} style={{backgroundColor: color}}className="Header-btn">{text}</button>
    )
}

// defaultProps
Button.defaultProps = {
    color: 'steelblue'
}

export default Button 