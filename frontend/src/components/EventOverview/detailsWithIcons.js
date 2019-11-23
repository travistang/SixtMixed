import React from 'react';
import Icon from '@material-ui/core/Icon';

export default function DetailsWithIcons({ iconName, value, style }) {
    return (
        <div style={style} 
            className="EventOverview-DetailsWithIcons">
            <Icon>{iconName}</Icon>
            <div style={{width: 12}} />
            {value}
        </div>
    );
}