import React from 'react'

export const Alert = (props) => {
    return (
        <div className={`alert alert-${props.varient || 'info'}`} role="alert">
            {props.children}
        </div>
    )
}


