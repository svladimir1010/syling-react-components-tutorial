import PropTypes from 'prop-types'
import React from 'react'
import './Alert.css'

const Alert = ( { children, title, type } ) => {
    return (
        <div className={`alert-wrapper ${type}`}>
            <h2>{ title }</h2>
            { children }
        </div>
    )
}

export default Alert

Alert.prototypes = {
    children: PropTypes.oneOfType( [
        PropTypes.arrayOf( PropTypes.element ),
        PropTypes.element.isRequired
    ] ),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}