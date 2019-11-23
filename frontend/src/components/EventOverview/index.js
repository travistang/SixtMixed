import React from 'react';
import './style.css';
import CommuteLogo from '../CommuteLogo';

export default function EventOverview({
    title     = 'Some event',
    startTime = new Date() - (48 * 60 * 60 * 1000),
    endTime   = new Date() + (48 * 60 * 60 * 1000),
    startLocation = "Start location",
    destination  = "Destination"
}) {
    return (
        <div className="EventOverview-Container">
            <div className="EventOverview-Row">
                <CommuteLogo />
                <div className="EventOverview-LocationContainer">
                    <div className="EventOverview-LocationContainerInner">
                        {startLocation}
                    </div>
                    <div className="EventOverview-LocationContainerInner" />
                    <div className="EventOverview-LocationContainerInner">
                        {destination}
                    </div>

                </div>
            </div>
            <div className="EventOverview-Row">
            </div>
        </div>
    );
}