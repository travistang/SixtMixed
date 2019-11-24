import React from 'react'

export default function SmallDescription({label, value, highlightValue}) {
    return (
        <div className="EventOverview-SmallDescription">
            <div className="EventOverview-SmallDescriptionTitle">
                {label}
            </div>
            <div 
                style={{color: highlightValue?"green":"white"}} 
                className="EventOverview-SmallDescriptionValue">
                {value}
            </div>
        </div>
    )
}