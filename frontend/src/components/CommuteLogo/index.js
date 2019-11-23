import React from 'react';
import './style.css';

export default function CommuteLogo() {
    return (
        <div className="CommuteLogo-Container">
            <div className="CommuteLogo-Ball" />
            <div className="CommuteLogo-LineOuter">
                <div style={{borderRight: "1px solid white"}} />
                <div style={{borderLeft: "1px solid white"}} />
            </div>
            <div className="CommuteLogo-Ball" />
        </div>
    )
}