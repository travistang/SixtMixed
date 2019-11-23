import React from 'react';
import Icon from '@material-ui/core/Icon';
import './style.css';

export default function Button({ iconName, text}) {
    return (
        <div className="Button">
            <Icon>{iconName}</Icon>
            {text}
        </div>
    )
}