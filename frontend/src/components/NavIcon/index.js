import React from 'react';
import Icon from '@material-ui/core/Icon';
import './style.css'
export default function NavIcon({
    iconName,
    name,
    active = false
}) {
    return (
        <div className={`NavIcon-Container${active?"-focused":""}`}>
            <Icon className="NavIcon-Icon">
                { iconName }
            </Icon>
            <div className="NavIcon-Name">
                { name }
            </div>            
        </div>
    )
}