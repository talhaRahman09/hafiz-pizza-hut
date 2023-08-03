import React from 'react';

export const Alert = (props) => {
    return (
        <div className={`m-3 alert alert-${props.variant || 'info'}`} role="alert">
            {props.children}
        </div>
    );
};

