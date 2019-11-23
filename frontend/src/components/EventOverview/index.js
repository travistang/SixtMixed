import React from 'react';
import './style.css';
import CommuteLogo from '../CommuteLogo';
import SmallDescription from './smallDescription';
import DetailsWithIcons from './detailsWithIcons';
import Button from '../Button';
import Map from './map';
import { geolocated } from "react-geolocated";
import { timeToString, timeInMinutes, addMinutesToTime } from '../../utils';

function EventOverview({
    // the event we are trying to attend
    event,

    // journey info
    startLocation,
    startLocationCoordinate,
    destination,
    destinationCoordinate,
    startTime,
    endTime,
    totalPrice = 10,
    // general info
    totalOffersAvailable = 1
}) {

    const timeToLeave = timeInMinutes(startTime - new Date());
    // const timeToLeave = timeInMinutes(startTime - new Date());
    const arrivedTimeBeforeEvent = timeInMinutes(event.startTime - endTime);
    const isLate = arrivedTimeBeforeEvent < 0;

    return (
        <div className="EventOverview-Container">
            <Map
                startLocation={startLocationCoordinate}
                endLocation={destinationCoordinate}
            />

            <div className="EventOverview-Row EventOverview-Separator">
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
                <div className="EventOverview-Duration">
                    <SmallDescription 
                        label="Time to leave" 
                        value={`${timeToLeave} Mins`} />
                </div>
            </div>
            <div className="EventOverview-Row">
                <DetailsWithIcons
                    iconName="euro"
                    value={totalPrice.toFixed(2)} />
                <div style={{flex: 1}} />
                <DetailsWithIcons
                    iconName="directions_run"
                    style={isLate ? {color: '#ff5f00'}: {color: 'white'}}
                    value={
                        isLate?
                        `${-arrivedTimeBeforeEvent} mins late`:"On time"
                    }
                />
                <DetailsWithIcons
                    iconName="flag" 
                    value={timeToString(endTime)} />
            </div>
            
        </div>
    );
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    }
})(EventOverview);