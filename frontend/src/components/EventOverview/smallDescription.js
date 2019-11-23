import React from 'react'

export default function SmallDescription({label, value}) {
    return (
        <div className="EventOverview-SmallDescription">
            <div className="EventOverview-SmallDescriptionTitle">
                {label}
            </div>
            <div className="EventOverview-SmallDescriptionValue">
                {value}
            </div>
        </div>
    )
}